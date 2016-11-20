import { HORIZONTAL, VERTICAL, Pane, Container } from './layout';

export default function deserialize(array, hydrate = doc => doc, _parentOrientation) {
  if (!Array.isArray(array)) {
    throw new Error('Invalid layout serialization');
  } else if (typeof array[0] === 'number') {
    return deserializePane(array, hydrate);
  } else {
    return deserializeContainer(array, hydrate, _parentOrientation);
  }
}

function deserializePane([active, ...docs], hydrate) {
  const documents = docs.map(doc => hydrate(doc));
  return new Pane(documents, documents[active]);
}

function deserializeContainer(array, hydrate, parentOrientation) {
  const orientation = parentOrientation === HORIZONTAL ? VERTICAL : HORIZONTAL;
  const children = array.map(child => deserialize(child, hydrate, orientation));

  // Containers may never be completely empty
  if (!children.length) {
    children.push(new Pane());
  }

  return new Container(orientation, children);
}

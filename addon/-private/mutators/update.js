import { Container, Pane, HORIZONTAL } from '../layout';

export default function update(layout, path, callback, _parent) {
  if (layout.documents) {
    return updatePane(layout, path, callback, _parent);
  } else {
    return updateContainer(layout, path, callback, _parent);
  }
}

function updateContainer(container, [target, ...path], callback, parent) {
  if (typeof target !== 'number') throw new Error('Invalid update path');

  const children = [].concat(...container.children.map((child, index) => {
    if (index === target) {
      return update(child, path, callback, container);
    } else {
      return child;
    }
  })).filter(Boolean);

  if (children.length) {
    return new Container(container.orientation, children);
  } else if (!parent) {
    // Never return nothing at the top level
    return new Container(HORIZONTAL, [new Pane()]);
  }
}

function updatePane(pane, path, callback, parent) {
  if (path.length) {
    throw new Error('Invalid path');
  } else {
    return callback(pane, parent);
  }
}

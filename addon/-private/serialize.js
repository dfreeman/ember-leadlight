export default function serialize(layout, dehydrate = doc => doc) {
  if (layout.children) {
    return serializeContainer(layout, dehydrate);
  } else {
    return serializePane(layout, dehydrate);
  }
}

function serializeContainer(container, dehydrate) {
  return container.children.map(child => serialize(child, dehydrate));
}

function serializePane(pane, dehydrate) {
  const index = pane.documents.indexOf(pane.activeDocument);
  return [index, ...pane.documents.map(doc => dehydrate(doc))];
}

import { Pane } from '../layout';
import update from './update';

export default function close(layout, path, doc) {
  return update(layout, path, (pane) => {
    if (!doc) return null;
    if (pane.documents.indexOf(doc) === -1) throw new Error('No such document in this pane');

    let activeDocument = pane.activeDocument;
    if (activeDocument === doc) {
      const oldIndex = pane.documents.indexOf(doc);
      activeDocument = oldIndex === 0 ? pane.documents[1] : pane.documents[oldIndex - 1];
    }

    return new Pane(pane.documents.filter(d => d !== doc), activeDocument);
  });
}

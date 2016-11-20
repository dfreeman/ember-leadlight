import { Pane } from '../layout';
import update from './update';

export default function activate(layout, path, doc) {
  return update(layout, path, (pane) => {
    if (pane.activeDocument === doc) {
      return pane;
    } else if (pane.documents.indexOf(doc) >= 0) {
      return new Pane(pane.documents, doc);
    } else {
      return new Pane([...pane.documents, doc], doc);
    }
  });
}

import { HORIZONTAL as H, VERTICAL as V } from '../layout';
import { UP, DOWN, LEFT, RIGHT } from '../layout';
import { Container, Pane } from '../layout';

import update from './update';

export default function split(layout, path, direction, docs = []) {
  return update(layout, path, (existingPane, container) => {
    const newPane = new Pane(docs);
    const content = direction === UP || direction === LEFT ? [newPane, existingPane] : [existingPane, newPane];
    if (isAligned(container.orientation, direction)) {
      return content;
    } else {
      return new Container(container.orientation === H ? V : H, content);
    }
  });
}

function isAligned(orientation, direction) {
  const alignedH = orientation === H && (direction === LEFT || direction === RIGHT);
  const alignedV = orientation === V && (direction === UP || direction === DOWN);
  return alignedH || alignedV;
}

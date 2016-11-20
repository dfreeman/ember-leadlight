import { HORIZONTAL, VERTICAL } from 'ember-leadlight/-private/layout';

/**
 * TODO doc + testing
 */
export default function paneAtCoordinate(layout, width, height, x, y) {
  // If we're outside the bounds of the layout area, leave everything alone
  if (x <= 0 || y <= 0 || x >= width || y >= height) return {};

  const path = [];

  let container = layout;
  let xMin = 0, xMax = width;
  let yMin = 0, yMax = height;

  while (container.children) {
    const buckets = container.children.length;
    const previousPathLength = path.length;
    for (let i = 0; i < buckets; i++) {
      if (container.orientation === HORIZONTAL && x - xMin < (i + 1) * (xMax - xMin) / buckets) {
        const diff = (xMax - xMin) / buckets;
        container = container.children[i];
        xMin = xMin + i * diff;
        xMax = xMin + diff;
        path.push(i);
        break;
      } else if (container.orientation === VERTICAL && y - yMin < (i + 1) * (yMax - yMin) / buckets) {
        const diff = (yMax - yMin) / buckets;
        container = container.children[i];
        yMin = yMin + i * diff;
        yMax = yMin + diff;
        path.push(i);
        break;
      }
    }

    if (previousPathLength === path.length) {
      throw new Error('Uh oh, couldn\'t find it');
    }
  }

  return {
    path,
    pane: container,
    rect: {
      x: xMin,
      y: yMin,
      width: xMax - xMin,
      height: yMax - yMin
    }
  };
}

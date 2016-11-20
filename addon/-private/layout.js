export const LEFT = sym('left');
export const RIGHT = sym('right');
export const UP = sym('up');
export const DOWN = sym('down');
export const CENTER = sym('center');

export const HORIZONTAL = sym('horizontal');
export const VERTICAL = sym('vertical');

export class Container {
  constructor(orientation, children = []) {
    this.orientation = orientation;
    this.children = children;
  }
}

export class Pane {
  constructor(documents = [], activeDocument = documents[0]) {
    this.documents = documents;
    this.activeDocument = activeDocument;
  }
}

// istanbul ignore next
function sym(str) {
  if (typeof Symbol === 'function') {
    return Symbol(str);
  } else {
    return `--${str}`;
  }
}

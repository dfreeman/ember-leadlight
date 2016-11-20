import Ember from 'ember';

export function panePath([parentPath, index]) {
  if (parentPath) {
    return [...parentPath, index];
  } else {
    return [index];
  }
}

export default Ember.Helper.helper(panePath);

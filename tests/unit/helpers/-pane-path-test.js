import { panePath } from 'dummy/helpers/-leadlight-path';
import { module, test } from 'qunit';

module('Unit | Helper |  pane layout path');

test('it handles no parent path', function(assert) {
  const result = panePath([null, 1]);
  assert.deepEqual(result, [1]);
});

test('it handles a defined parent path', function(assert) {
  const result = panePath([[1, 2, 1], 5]);
  assert.deepEqual(result, [1, 2, 1, 5]);
});

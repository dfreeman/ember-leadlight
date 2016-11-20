import { module, test } from 'qunit';
import { serialize, HORIZONTAL, VERTICAL } from 'ember-leadlight';
import { Pane, Container } from 'ember-leadlight/-private/layout';

module('Unit | serialize');

test('empty layout', function(assert) {
  const layout = new Container(HORIZONTAL, []);
  assert.deepEqual(serialize(layout), []);
});

test('non-empty layout', function(assert) {
  const layout = new Container(HORIZONTAL, [
    new Pane(['foo', 'bar'], 'foo'),
    new Container(VERTICAL, [
      new Pane(['baz', 'qux'], 'qux'),
      new Pane(['twiddle'], 'twiddle')
    ])
  ]);

  assert.deepEqual(serialize(layout), [
    [0, 'foo', 'bar'],
    [
      [1, 'baz', 'qux'],
      [0, 'twiddle']
    ]
  ]);
});

test('custom dehydration', function(assert) {
  const three = ['three'];
  const bang = ['!'];
  const layout = new Container(HORIZONTAL, [
    new Pane([['hi']]),
    new Pane([['one', 'two'], three], three),
    new Container(VERTICAL, [
      new Pane([['ok'], ['ay'], bang], bang),
      new Pane([['.']])
    ])
  ]);

  assert.deepEqual(serialize(layout, doc => `|${doc.join('|')}|`), [
    [0, '|hi|'],
    [1, '|one|two|', '|three|'],
    [
      [2, '|ok|', '|ay|', '|!|'],
      [0, '|.|']
    ]
  ]);
});

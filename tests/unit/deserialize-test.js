import { module, test } from 'qunit';
import { deserialize, HORIZONTAL, VERTICAL } from 'ember-leadlight';
import { Container, Pane } from 'ember-leadlight/-private/layout';

module('Unit | deserialize');

test('invalid serialization', function(assert) {
  assert.throws(() => deserialize(), 'Invalid layout serialization');
  assert.throws(() => deserialize('hi'), 'Invalid layout serialization');
  assert.throws(() => deserialize([[null]]), 'Invalid layout serialization');
  assert.throws(() => deserialize([[{}]]), 'Invalid layout serialization');
});

test('empty serialization', function(assert) {
  const layout = deserialize([]);
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Pane()
  ]));
});

test('non-empty serialization', function(assert) {
  const serialized = [
    [0, 'foo', 'bar'],
    [
      [1, 'baz', 'qux'],
      [0, 'twiddle']
    ]
  ];

  const layout = deserialize(serialized);
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Pane(['foo', 'bar'], 'foo'),
    new Container(VERTICAL, [
      new Pane(['baz', 'qux'], 'qux'),
      new Pane(['twiddle'], 'twiddle')
    ])
  ]));
});

test('custom hydration', function(assert) {
  const serialized = [
    [0, ['hi']],
    [1, ['one', 'two'], ['three']],
    [
      [2, ['ok'], ['ay'], ['!']],
      [0, ['.']]
    ]
  ];

  const layout = deserialize(serialized, doc => `|${doc.join('|')}|`);
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Pane(['|hi|'], '|hi|'),
    new Pane(['|one|two|', '|three|'], '|three|'),
    new Container(VERTICAL, [
      new Pane(['|ok|', '|ay|', '|!|'], '|!|'),
      new Pane(['|.|'], '|.|')
    ])
  ]));
});

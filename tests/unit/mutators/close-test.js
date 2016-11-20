import { module, test } from 'qunit';
import { close, VERTICAL, HORIZONTAL } from 'ember-leadlight';
import { Pane, Container } from 'ember-leadlight/-private/layout';

module('Unit | Mutator | close');

test('inactive document', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Pane(['one', 'two', 'three'], 'three')
  ]);

  layout = close(layout, [0], 'two');
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Pane(['one', 'three'], 'three')
  ]));

  layout = close(layout, [0], 'one');
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Pane(['three'], 'three')
  ]));
});

test('active document with a previous document', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Pane(['one', 'two', 'three'], 'three')
  ]);

  layout = close(layout, [0], 'three');
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Pane(['one', 'two'], 'two')
  ]));
});

test('active document with no previous document', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Pane(['one', 'two', 'three'], 'one')
  ]);

  layout = close(layout, [0], 'one');
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Pane(['two', 'three'], 'two')
  ]));
});

test('nonexistent document', function(assert) {
  const layout = new Container(HORIZONTAL, [
    new Pane(['one']),
    new Pane(['two'])
  ]);

  assert.throws(() => close(layout, [0], 'two'), /No such document/);
});

test('last document in a pane', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Pane(['h']),
    new Container(VERTICAL, [
      new Pane(['v1']),
      new Pane(['v2'])
    ])
  ]);

  layout = close(layout, [1, 0], 'v1');
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Pane(['h'], 'h'),
    new Container(VERTICAL, [
      new Pane([], undefined),
      new Pane(['v2'], 'v2')
    ])
  ]));
});

test('entire pane', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Pane(['h']),
    new Container(VERTICAL, [
      new Pane(['v1']),
      new Pane(['v2'])
    ])
  ]);

  layout = close(layout, [1, 0]);
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Pane(['h'], 'h'),
    new Container(VERTICAL, [
      new Pane(['v2'], 'v2')
    ])
  ]));
});

test('last pane in a container', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Pane(['h']),
    new Container(VERTICAL, [
      new Pane(['v1'])
    ])
  ]);

  layout = close(layout, [1, 0]);
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Pane(['h'], 'h')
  ]));
});

test('last pane in the last nested container', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Container(VERTICAL, [
      new Pane(['v1'])
    ])
  ]);

  layout = close(layout, [0, 0]);
  assert.deepEqual(layout, new Container(HORIZONTAL, [new Pane()]));
});

import { module, test } from 'qunit';
import { split, HORIZONTAL, VERTICAL, LEFT, RIGHT, UP, DOWN } from 'ember-leadlight';
import { Pane, Container } from 'ember-leadlight/-private/layout';

module('Unit | Mutator | split');

test('split horizontal right', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Pane(['left']),
    new Pane(['right'])
  ]);

  layout = split(layout, [0], RIGHT);
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Pane(['left']),
    new Pane(),
    new Pane(['right'])
  ]));
});

test('split horizontal left', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Pane(['left']),
    new Pane(['right'])
  ]);

  layout = split(layout, [0], LEFT);
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Pane(),
    new Pane(['left']),
    new Pane(['right'])
  ]));
});

test('split horizontal up', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Pane(['left']),
    new Pane(['right'])
  ]);

  layout = split(layout, [0], UP);
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Container(VERTICAL, [
      new Pane(),
      new Pane(['left'])
    ]),
    new Pane(['right'])
  ]));
});

test('split horizontal down', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Pane(['left']),
    new Pane(['right'])
  ]);

  layout = split(layout, [0], DOWN);
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Container(VERTICAL, [
      new Pane(['left']),
      new Pane([])
    ]),
    new Pane(['right'])
  ]));
});

test('split vertical up', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Container(VERTICAL, [
      new Pane(['top']),
      new Pane(['bottom'])
    ])
  ]);

  layout = split(layout, [0, 0], UP);
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Container(VERTICAL, [
      new Pane(),
      new Pane(['top']),
      new Pane(['bottom'])
    ])
  ]));
});

test('split vertical down', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Container(VERTICAL, [
      new Pane(['top']),
      new Pane(['bottom'])
    ])
  ]);

  layout = split(layout, [0, 0], DOWN);
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Container(VERTICAL, [
      new Pane(['top']),
      new Pane(),
      new Pane(['bottom'])
    ])
  ]));
});

test('split vertical left', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Container(VERTICAL, [
      new Pane(['top']),
      new Pane(['bottom'])
    ])
  ]);

  layout = split(layout, [0, 0], LEFT);
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Container(VERTICAL, [
      new Container(HORIZONTAL, [
        new Pane(),
        new Pane(['top'])
      ]),
      new Pane(['bottom'])
    ])
  ]));
});

test('split vertical right', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Container(VERTICAL, [
      new Pane(['top']),
      new Pane(['bottom'])
    ])
  ]);

  layout = split(layout, [0, 0], RIGHT);
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Container(VERTICAL, [
      new Container(HORIZONTAL, [
        new Pane(['top']),
        new Pane()
      ]),
      new Pane(['bottom'])
    ])
  ]));
});

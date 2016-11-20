import { module, test } from 'qunit';
import { open, HORIZONTAL } from 'ember-leadlight';
import { Pane, Container } from 'ember-leadlight/-private/layout';

module('Unit | Mutator | open');

test('existing document', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Pane(['one', 'two', 'three'], 'two')
  ]);

  layout = open(layout, [0], 'three');
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Pane(['one', 'two', 'three'], 'three')
  ]));
});

test('new document', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Pane(['one', 'two', 'three'], 'two')
  ]);

  layout = open(layout, [0], 'four');
  assert.deepEqual(layout, new Container(HORIZONTAL, [
    new Pane(['one', 'two', 'three', 'four'], 'four')
  ]));
});

import { module, test } from 'qunit';
import { activate, HORIZONTAL } from 'ember-leadlight';
import { Pane, Container } from 'ember-leadlight/-private/layout';

module('Unit | Mutator | activate');

test('activating an inactive document', function(assert) {
  let layout = new Container(HORIZONTAL, [
    new Pane(['one', 'two', 'three'], 'one')
  ]);

  assert.equal(layout.children[0].activeDocument, 'one');

  layout = activate(layout, [0], 'three');
  assert.equal(layout.children[0].activeDocument, 'three');

  layout = activate(layout, [0], 'two');
  assert.equal(layout.children[0].activeDocument, 'two');

  layout = activate(layout, [0], 'one');
  assert.equal(layout.children[0].activeDocument, 'one');
});

test('activating an already-active document', function(assert) {
  const layout = new Container(HORIZONTAL, [
    new Pane(['one', 'two', 'three'], 'two')
  ]);

  const updated = activate(layout, [0], 'two');

  assert.deepEqual(layout, updated);
});

test('attempting to activate a missing document', function(assert) {
  const layout = new Container(HORIZONTAL, [
    new Pane(['one', 'two', 'three'], 'two')
  ]);

  const updated = activate(layout, [0], 'four');

  assert.equal(updated.children[0].activeDocument, 'four');
  assert.deepEqual(updated.children[0].documents, ['one', 'two', 'three', 'four']);
});

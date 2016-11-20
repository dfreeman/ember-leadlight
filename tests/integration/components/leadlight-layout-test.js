import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { deserialize } from 'ember-leadlight';

moduleForComponent('leadlight-layout', 'Integration | Component | leadlight layout', {
  integration: true
});

test('it renders content', function(assert) {
  this.set('panes', deserialize([[0, 'one'], [0, 'two']]));
  this.render(hbs`
    {{#leadlight-layout panes=panes as |layout|}}
      {{#layout.panes as |pane|}}
        <div data-pane-content={{pane.activeDocument}}></div>
      {{/layout.panes}}
    {{/leadlight-layout}}
  `);

  assert.ok(this.$('[data-pane-content=one]').length);
  assert.ok(this.$('[data-pane-content=two]').length);
});

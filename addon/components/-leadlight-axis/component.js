import Ember from 'ember';
import { VERTICAL } from 'ember-leadlight';

import layout from './template';
import styles from './styles';

const { Component, computed } = Ember;

export default Component.extend({
  layout,
  styles,

  localClassNames: ['pane-axis'],
  localClassNameBindings: 'vertical:vertical:horizontal',

  attributeBindings: ['rootIdentifier:data-panes'],
  rootIdentifier: null,
  rootActions: null,

  vertical: computed.equal('paneContainer.orientation', VERTICAL)
});

import Ember from 'ember';
const { Component, K } = Ember;

export default Component.extend({
  attributeBindings: ['draggable', 'title'],
  draggable: 'true',

  dragStarted: K,
  dragEnded: K,
  activate: K,

  title: null,
  document: null,
  path: null,

  click() {
    this.get('activate')(this.get('path'), this.get('document'));
  },

  dragStart({ originalEvent }) {
    const { clientX, clientY } = originalEvent;
    originalEvent.dataTransfer.setData('text/plain', '');
    this.get('dragStarted')(this.get('path'), this.get('document'), clientX, clientY);
  },

  dragEnd() {
    this.get('dragEnded')(this.get('path'), this.get('document'));
  }
});

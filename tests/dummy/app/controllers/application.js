import Ember from 'ember';
import { lorem, system } from 'faker';
import { deserialize } from 'ember-leadlight';

const { Controller, A } = Ember;

const documents = A(Array.from(Array(20), () => {
  return { title: system.commonFileName(), content: lorem.paragraphs(5, '\n\n') };
}));

const serialized = [
  [1, documents[0].title, documents[1].title, documents[4].title, documents[5].title],
  [
    [0, documents[2].title],
    [0, documents[3].title]
  ]
];

export default Controller.extend({
  documents,

  panes: deserialize(serialized, title => documents.findBy('title', title)),

  actions: {
    layoutChanged(panes) {
      this.set('panes', panes);
    }
  }
});

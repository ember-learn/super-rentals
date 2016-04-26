import Ember from 'ember';

export default Ember.Component.extend({
  filter: null,
  filteredList: null,

  actions: {
    choose(city) {
      this.set('filter', city);
    }
  }
});

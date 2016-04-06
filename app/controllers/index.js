import Ember from 'ember';

export default Ember.Controller.extend({
  filteredList: null,
  actions: {
    autoComplete(param) {
      if (param !== '') {
        this.get('store').query('rental', { city: param }).then((result) => this.set('filteredList', result));
      } else {
        this.set('filteredList', null);
      }
    },
    search(param) {
      if (param !== '') {
        this.store.query('rental', { city: param }).then((result) => this.set('model', result));
      } else {
        this.get('store').findAll('rental').then((result) => this.set('model', result));
      }
    }
  }
});

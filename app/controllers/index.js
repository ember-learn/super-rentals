import Ember from 'ember';

export default Ember.Controller.extend({
  filteredList: null,

  findAllRentals() {
    return this.get('store').findAll('rental');
  },

  queryRentals(filter) {
    return this.get('store').query('rental', { city: filter });
  },

  resetRentalModel() {
    this.findAllRentals().then(result => {
      this.set('model', result);
    });
  },

  updateFilteredList(filter) {
    this.queryRentals(filter).then(result => {
      this.set('filteredList', result);
    });
  },

  updateRentalModel(filter) {
    this.queryRentals(filter).then(result => {
      this.set('model', result);
    });
  },

  actions: {
    autoComplete(filter) {
      if (filter && filter !== '') {
        this.updateFilteredList(filter);
      } else {
        this.set('filteredList', null);
      }
    },

    search(filter) {
      if (filter && filter !== '') {
        this.updateRentalModel(filter);
      } else {
        this.resetRentalModel();
      }
    }
  }
});

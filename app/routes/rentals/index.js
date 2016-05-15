import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },

  actions: {
    goToShowRoute(slug) {
      this.transitionTo('rentals.show', slug);
    }
  }
});

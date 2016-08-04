import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'rentals',
  model() {
    return this.get('store').findAll('rental');
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.transitionTo('rentals.index');
    this._super(...arguments);
  }
});

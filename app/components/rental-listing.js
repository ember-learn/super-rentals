import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    },
    goToShowRoute() {
      let slug = Ember.get(this, 'rental.slug');
      this.sendAction('goToShowRoute', slug);
    }
  }
});

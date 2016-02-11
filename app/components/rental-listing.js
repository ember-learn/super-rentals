import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  classNameBindings: ['isSelected:selected'],

  didReceiveAttrs() {
    this._super(...arguments);
    if (this.get('selectedUnit') === this.get('rental')) {
      this.set('isSelected', true);
    } else {
      this.set('isSelected', false);
    }
  },

  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    }
  }
});

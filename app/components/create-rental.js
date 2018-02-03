import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  router: service(),

  init() {
    this._super(...arguments);
    this.setProperties({
      title: '',
      category: '',
      categoryOptions: ['Estate', 'Condo', 'Townhouse', 'Apartment', 'House'],
      bedrooms: 0, // default bedroom #
      city: '',
      image: 'assets/images/rental_default.png', // placeholder default
      description: '',
      hasError: false,
    });
  },

  actions: {
    createRental() {
      let newRental = this.getProperties('title', 'category', 'bedrooms', 'city', 'image', 'description');
      let createdRental = this.get('store').createRecord('rental', newRental);
      createdRental.save()
      .then(() => {
        this.get('router').transitionTo('rentals');
      })
      .catch((error) => {
        this.set('hasError', error);
        createdRental.rollbackAttributes();
      });

    },
  },

});

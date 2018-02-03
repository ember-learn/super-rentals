import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  init() {
    this._super(...arguments);
    this.setProperties({
      showEditDialog: false,
      showConfirmDialog: false,
      rentalToUpdate: null,
      rentalToDelete: null,
      hasError: false,
      categoryOptions: ['Estate', 'Condo', 'Townhouse', 'Apartment', 'House'],
    });
  },

  actions: {
    openEditDialog(rental) {
      this.set('rentalToUpdate', rental);
      this.set('showEditDialog', true);
    },

    closeEditDialog() {
        this.set('showEditDialog', false);
        this.get('rentalToUpdate').rollbackAttributes();
        this.set('rentalToUpdate', null);
    },

    confirmDelete(rental) {
      this.set('rentalToDelete', rental);
      this.set('showConfirmDialog', true);
    },

    cancelDelete() {
      this.set('rentalToDelete', null);
    },

    deleteRental(rentalToDelete) {
      if (rentalToDelete) {
        return rentalToDelete.destroyRecord()
        .then(() => {
          this.set('showConfirmDialog', false);
        })
        .catch((err) => {
          this.set('hasError', err);
        });
      }
    },

    updateRental(rentalToUpdate) {
      this.set('showEditDialog', false);
      if (rentalToUpdate && rentalToUpdate.get('hasDirtyAttributes')) {
        rentalToUpdate.save()
        .then(() => {
          this.set('rentalToUpdate', null);
        })
        .catch((err) => {
          this.set('hasError', err);
          rentalToUpdate.rollbackAttributes();
          this.set('rentalToUpdate', null);
        });
      }
    },
  },

});

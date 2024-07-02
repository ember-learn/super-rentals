import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class RentalRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('rental', params.rental_id);
  }
}

import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { findRecord } from '@warp-drive/utilities/json-api';

export default class RentalRoute extends Route {
  @service store;

  async model(params) {
    const { content } = await this.store.request(
      findRecord('rental', params.rental_id),
    );
    return content.data;
  }
}

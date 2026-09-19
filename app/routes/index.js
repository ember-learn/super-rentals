import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { query } from '@warp-drive/utilities/json-api';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    const { content } = await this.store.request(query('rental'));
    return content.data;
  }
}

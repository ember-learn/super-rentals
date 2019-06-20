import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class RentalsController extends Controller {
  @action
  async filterByCity(param) {
    if (param !== '') {
      let results = await this.store.query('rental', { city: param });
      return { query: param, results };
    } else {
      let results = await this.store.findAll('rental');
      return { query: param, results }
    }
  }
}

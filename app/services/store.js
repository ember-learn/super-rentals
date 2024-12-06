import BaseStore from 'ember-data/store';
import { service } from '@ember/service';

export default class Store extends BaseStore {
  @service requestManager;
}

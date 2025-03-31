import BaseStore from '@ember-data/store';
import { service } from '@ember/service';
import {
  instantiateRecord,
  teardownRecord,
  registerDerivations,
  SchemaService,
} from '@warp-drive/schema-record';
import { register as registerRental } from '../schemas/rental';
import { CachePolicy } from '@ember-data/request-utils';
import JSONAPICache from '@ember-data/json-api';

export default class Store extends BaseStore {
  @service requestManager;

  lifetimes = new CachePolicy({
    apiCacheHardExpires: 1000 * 60 * 60 * 48, // 48 hours
    apiCacheSoftExpires: 1000 * 60 * 60, // 1 hour
  });

  createSchemaService() {
    const schema = new SchemaService();

    registerDerivations(schema);
    registerRental(schema);

    return schema;
  }

  createCache(capabilites) {
    return new JSONAPICache(capabilites);
  }

  instantiateRecord(identifier, createArgs) {
    return instantiateRecord(this, identifier, createArgs);
  }

  teardownRecord(record) {
    return teardownRecord(record);
  }
}

import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';
import startMirage from '../../../helpers/setup-mirage-for-unit-test';

moduleFor('route:rentals/show', 'Unit | Route | rentals/show', {
  needs: ['model:rental',
         'adapter:application'],
  beforeEach() {
    startMirage(this.container);
  },
  afterEach() {
    window.server.shutdown();
  }
});

test('should load rental by id', function(assert) {
  let route = this.subject();
  return Ember.run(() => {
    return route.model({ rental_id: 'grand-old-mansion'}).then((result) => {
      assert.equal(result.get('title'), "Grand Old Mansion");
    });
  });
});

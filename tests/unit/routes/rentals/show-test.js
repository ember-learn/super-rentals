import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import startMirage from '../../../helpers/setup-mirage-for-unit-test';

module('Unit | Route | rentals/show', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    startMirage(this.container);
  });

  hooks.afterEach(function() {
    window.server.shutdown();
  });

  test('should load rental by id', function(assert) {
    let route = this.owner.lookup('route:rentals/show');
    return run(() => {
      return route.model({ rental_id: 'grand-old-mansion'}).then((result) => {
        assert.equal(result.get('title'), "Grand Old Mansion");
      });
    });
  });
});
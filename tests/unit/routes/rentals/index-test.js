import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Unit | Route | rentals/index', function(hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test('should load all rentals', function(assert) {
    let route = this.owner.lookup('route:rentals/index');
    return run(() => {
      return route.model().then((results) => {
        assert.equal(results.get('length'), 3);
      });
    });

  });
});

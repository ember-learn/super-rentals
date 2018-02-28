import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import startMirage from '../../../helpers/setup-mirage-for-unit-test';

module('Unit | Route | rentals/index', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    startMirage(this.container);
  });

  hooks.afterEach(function() {
    window.server.shutdown();
  });

  test('should load all rentals', function(assert) {
    let route = this.owner.lookup('route:rentals/index');
    return run(() => {
      return route.model().then((results) => {
        assert.equal(results.get('length'), 3);
      });
    });

  });
});
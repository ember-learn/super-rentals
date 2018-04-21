import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index', function(hooks) {
  setupTest(hooks);

  test('should transition to rentals route', function(assert) {
    let route = this.owner.factoryFor('route:index').create({
      replaceWith(routeName) {
        assert.equal(routeName, 'rentals', 'transition to route name rentals');
      }
    });
    route.beforeModel();
  });
});

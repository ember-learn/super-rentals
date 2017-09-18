import { moduleFor, test } from 'ember-qunit';
import startMirage from '../../../helpers/setup-mirage-for-unit-test';
import Ember from 'ember';

moduleFor('route:rentals/index', 'Unit | Route | rentals/index', {
  needs: ['model:rental',
         'adapter:application'],
  beforeEach() {
    startMirage(this.container);
  },
  afterEach() {
    window.server.shutdown();
  }
});

test('should load all rentals', function(assert) {
  let route = this.subject();
  return Ember.run(() => {
    return route.model().then((results) => {
      assert.equal(results.get('length'), 3);
    });
  });

});

import { run } from '@ember/runloop';
import { moduleFor, test } from 'ember-qunit';
import startMirage from '../../../helpers/setup-mirage-for-unit-test';

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
  return run(() => {
    return route.model().then((results) => {
      assert.equal(results.get('length'), 3);
    });
  });

});

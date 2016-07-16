import { moduleFor, test } from 'ember-qunit';

moduleFor('route:rentals/show', 'Unit | Route | rentals/show', {});

test('should query for selected rental by slug', function(assert) {
  let store = {
    queryRecord(path, options) {
      assert.equal(path, 'rental', 'queryRecord calls rental path on API');
      assert.deepEqual(options, { slug: 'rental-thing' });
    }
  };
  let route = this.subject({ store });
  route.model({ slug: 'rental-thing' });
});

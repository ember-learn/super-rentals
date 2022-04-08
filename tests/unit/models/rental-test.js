import { module, test } from 'qunit';
import { setupTest } from 'super-rentals/tests/helpers';

module('Unit | Model | rental', function (hooks) {
  setupTest(hooks);

  test('it has the right type', function (assert) {
    let store = this.owner.lookup('service:store');
    let rental = store.createRecord('rental', {
      id: 'grand-old-mansion',
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      location: {
        lat: 37.7749,
        lng: -122.4194,
      },
      category: 'Estate',
      bedrooms: 15,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description:
        'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
    });

    assert.strictEqual(rental.type, 'Standalone');

    rental.category = 'Condo';
    assert.strictEqual(rental.type, 'Community');

    rental.category = 'Townhouse';
    assert.strictEqual(rental.type, 'Community');

    rental.category = 'Apartment';
    assert.strictEqual(rental.type, 'Community');

    rental.category = 'Estate';
    assert.strictEqual(rental.type, 'Standalone');
  });
});

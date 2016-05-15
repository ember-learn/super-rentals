import { moduleFor, test } from 'ember-qunit';

moduleFor('route:rentals/index', 'Unit | Route | rentals/index', {
});

test('`goToShowRoute` transitions users with correct rental slug', function(assert) {
  assert.expect(2);

  let transitionStub = function(target, params) {
    assert.equal(target, 'rentals.show', 'user is transitioned to `show` route');
    assert.equal(params, 'grand-old-mansion', 'correct slug is passed to route');
  };
  let route = this.subject({
    transitionTo: transitionStub
  });

  let rental = {
    name: 'Grand Old Mansion',
    slug: 'grand-old-mansion'
  };

  route.send('goToShowRoute', rental.slug);
});

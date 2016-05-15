import { moduleFor, test } from 'ember-qunit';

moduleFor('route:rentals/show', 'Unit | Route | rentals/show', {});

test('`setupController` sets rental from our model', function(assert) {
  assert.expect(1);
  const route = this.subject();

  const model = {
    title: "Grand Old Mansion",
    owner: "Veruca Salt",
    city: "San Francisco"
  };

  const controller = {};

  route.setupController(controller, model);

  const expectedController = {
    rental: model
  };

  assert.deepEqual(controller, expectedController, 'rental is added');
});

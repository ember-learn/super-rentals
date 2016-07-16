import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';
import Ember from 'ember'

let StubMapsService = Ember.Service.extend({
  getMapElement() {
    return document.createElement('div');
  }
});

moduleForAcceptance('Acceptance | rentals', {
  beforeEach() {
    this.application.register('service:mockMaps', StubMapsService);
    this.application.inject('component:location-map', 'maps', 'service:mockMaps');
  }
});

test('should initially list 3 rentals', function (assert) {
  visit('/rentals');
  andThen(function () {
    assert.equal(this.$('.results .listing').length, 3, "should display 3 listings");
  });
});

test('should link to each rental show routes', function (assert) {
  visit('/rentals');
  click('a:contains("Grand Old Mansion")');
  andThen(function() {
    assert.equal(currentURL(), '/rentals/grand-old-mansion', "should navigate to show route");
  });
})

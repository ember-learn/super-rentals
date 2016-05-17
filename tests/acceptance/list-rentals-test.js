import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';
import Ember from 'ember';

let StubMapsService = Ember.Service.extend({
  getMapElement() {
    return document.createElement('div');
  }
});

moduleForAcceptance('Acceptance | list rentals', {
  beforeEach() {
    this.application.register('service:mockMaps', StubMapsService);
    this.application.inject('component:location-map', 'maps', 'service:mockMaps');
  }
});

test('should initially list 3 rentals', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(this.$('.results .listing').length, 3);
  });
});

test('should link to about page', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about');
  });
});

test('should link to contacts page', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function () {
    assert.equal(currentURL(), '/contact');
  });
});

test('should list 1 rental when filtering by Seattle', function (assert) {
  visit('/');
  fillIn('.list-filter input', 'seattle');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function () {
    assert.equal(this.$('.results .listing').length, 1);
  });
});

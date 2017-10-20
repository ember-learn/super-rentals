import Service from '@ember/service';
import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

let StubMapsService = Service.extend({
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

test('should redirect to rentals route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });
});


test('should link to about page', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contacts page', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

test('should initially list 3 rentals', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.results .listing').length, 3, 'should display 3 listings');
  });
});

test('should list 1 rental when filtering by Seattle', function (assert) {
  visit('/');
  fillIn('.list-filter input', 'seattle');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function () {
    assert.equal(find('.results .listing').length, 1, 'should display 1 listing');
    assert.equal(find('.listing .location:contains("Seattle")').length, 1, 'should contain 1 listing with location Seattle');
  });
});

test('should show details for a specific rental', function (assert) {
  visit('/rentals');
  click('a:contains("Grand Old Mansion")');
  andThen(function() {
    assert.equal(currentURL(), '/rentals/grand-old-mansion', "should navigate to show route");
    assert.equal(find('.show-listing h2').text(), "Grand Old Mansion", 'should list rental title');
    assert.equal(find('.description').length, 1, 'should list a description of the property');
  });
});

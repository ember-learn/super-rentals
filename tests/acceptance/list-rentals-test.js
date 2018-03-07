import Service from '@ember/service';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import {
  click,
  currentURL,
  visit,
  fillIn,
  triggerKeyEvent
} from '@ember/test-helpers'

let StubMapsService = Service.extend({
  getMapElement() {
    return document.createElement('div');
  }
});

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:maps', StubMapsService);
  });

  test('should redirect to rentals route', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });


  test('should link to about page', async function(assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to contacts page', async function(assert) {
    await visit('/');
    await click(".menu-contact");
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

  test('should list available rentals', async function(assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.results .listing').length, 3, 'should display 3 listings');
  });

  test('should filter the list of rentals by city', async function(assert) {
    await visit('/');
    await fillIn('.list-filter input', 'seattle');
    await triggerKeyEvent('.list-filter input', 'keyup', 69);
    assert.ok(this.element.querySelector('.results .listing'), 'should display 1 listing');
    assert.ok(this.element.querySelector('.listing .location').textContent.includes('Seattle'), 'should contain 1 listing with location Seattle');
  });

  test('should show details for a specific rental', async function(assert) {
    await visit('/rentals');
    await click(".grand-old-mansion");
    assert.equal(currentURL(), '/rentals/grand-old-mansion', "should navigate to show route");
    assert.ok(this.element.querySelector('.show-listing h2').textContent.includes("Grand Old Mansion"), 'should list rental title');
    assert.ok(this.element.querySelector('.show-listing .description'), 'should list a description of the property');
  });
});

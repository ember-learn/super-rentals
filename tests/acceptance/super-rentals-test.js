import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').containsText('SuperRentals');
    assert.dom('h2').containsText('Welcome to Super Rentals!');

    assert.dom('.jumbo a.button').containsText('About Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });

  test('visiting /about', async function(assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').containsText('SuperRentals');
    assert.dom('h2').containsText('About Super Rentals');

    assert.dom('.jumbo a.button').containsText('Contact Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/getting-in-touch');
  });

  test('visiting /getting-in-touch', async function(assert) {
    await visit('/getting-in-touch');

    assert.equal(currentURL(), '/getting-in-touch');
    assert.dom('nav').exists();
    assert.dom('h1').containsText('SuperRentals');
    assert.dom('h2').containsText('Contact Us');

    assert.dom('a.button').containsText('About');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });

  test('navigating using the nav-bar', async function(assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').containsText('SuperRentals')
    assert.dom('nav a.menu-about').containsText('About');
    assert.dom('nav a.menu-contact').containsText('Contact');

    await click('nav a.menu-about');
    assert.equal(currentURL(), '/about');

    await click('nav a.menu-contact');
    assert.equal(currentURL(), '/getting-in-touch');

    await click('nav a.menu-index');
    assert.equal(currentURL(), '/');
  });
});

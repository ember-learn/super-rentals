import Service from '@ember/service';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

let StubMapsService = Service.extend({
  getMapElement(location) {
    this.set('calledWithLocation', location);
    let element = document.createElement('div');
    element.className = 'map';
    return Promise.resolve(element);
  }
});

module('Integration | Component | location-map', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:map-element', StubMapsService);
    this.mapsService = this.owner.lookup('service:map-element');
  });

  test('should append map element to container element', async function(assert) {
    this.set('myLocation', 'New York');
    await render(hbs`<LocationMap @location={{myLocation}} />`);
    assert.ok(this.element.querySelector('.map-container > .map'), 'container should have map child');
    assert.equal(this.get('mapsService.calledWithLocation'), 'New York', 'should call service with New York');
  });
});

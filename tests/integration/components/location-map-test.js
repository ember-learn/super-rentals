import Service from '@ember/service';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

let StubMapsService = Service.extend({

  getMapElement(location) {
    this.set('calledWithLocation', location);
    return document.createElement('div');
  }
});

moduleForComponent('location-map', 'Integration | Component | location map', {
  integration: true,
  beforeEach() {
    this.register('service:maps', StubMapsService);
    this.inject.service('maps', { as: 'mapsService' });
  }
});

test('should append map element to container element', function(assert) {
  this.set('myLocation', 'New York');
  this.render(hbs`{{location-map location=myLocation}}`);
  assert.equal(this.$('.map-container').children().length, 1, 'container should have one child');
  assert.equal(this.get('mapsService.calledWithLocation'), 'New York', 'should call service with New York');
});

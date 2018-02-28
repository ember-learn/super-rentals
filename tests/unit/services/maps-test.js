import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

const DUMMY_ELEMENT = {};

module('Unit | Service | maps', function(hooks) {
  setupTest(hooks);

  test('should create a new map if one isnt cached for location', function (assert) {
    assert.expect(4);
    let stubMapUtil = {
      createMap(element, location) {
        assert.ok(element, 'createMap called with element');
        assert.ok(location, 'createMap called with location');
        return DUMMY_ELEMENT;
      }
    }
    let mapService = this.owner.factoryFor('service:maps').create({ mapUtil: stubMapUtil });
    let element = mapService.getMapElement('San Francisco');
    assert.ok(element, 'element exists');
    assert.equal(element.className, 'map', 'element has class name of map');
  });

  test('should use existing map if one is cached for location', function (assert) {
    assert.expect(1);
    let stubCachedMaps = {
      sanFrancisco: DUMMY_ELEMENT
    };
    let mapService = this.owner.factoryFor('service:maps').create({ cachedMaps: stubCachedMaps });
    let element = mapService.getMapElement('San Francisco');
    assert.equal(element, DUMMY_ELEMENT, 'element fetched from cache');
  });
});

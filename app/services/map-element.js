import { camelize } from '@ember/string';
import EmberObject, { get, set } from '@ember/object';
import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({

  geocode: service(),
  map: service(),

  init() {
    this._super(...arguments);
    set(this, 'cachedMaps', EmberObject.create());
  },

  async getMapElement(location) {
    let camelizedLocation = camelize(location);
    let element = get(this, `cachedMaps.${camelizedLocation}`);
    if (!element) {
      element = this._createMapElement();
      let geocodedLocation = await this.geocode.fetchCoordinates(location);
      this.map.createMap(element, geocodedLocation);
      set(this, `cachedMaps.${camelizedLocation}`, element);
    }
    return element;
  },

  _createMapElement() {
    let element = document.createElement('div');
    element.className = 'map';
    return element;
  },
});

import { camelize } from '@ember/string';
import { set } from '@ember/object';
import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({

  geocode: service(),
  map: service(),

  init() {
    if (!this.cachedMaps) {
      set(this, 'cachedMaps', {});
    }
    this._super(...arguments);
  },

  async getMapElement(location) {
    let camelizedLocation = camelize(location);
    let element = this.cachedMaps[camelizedLocation];
    if (!element) {
      element = this._createMapElement();
      let geocodedLocation = await this.geocode.fetchCoordinates(location);
      this.map.createMap(element, geocodedLocation);
      this.cachedMaps[camelizedLocation] = element;
    }
    return element;
  },

  _createMapElement() {
    let element = document.createElement('div');
    element.className = 'map';
    return element;
  },
});

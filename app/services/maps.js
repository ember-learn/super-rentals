import { camelize } from '@ember/string';
import EmberObject from '@ember/object';
import Service from '@ember/service';
import MapUtil from '../utils/google-maps';

export default Service.extend({
  init() {
    this._super(...arguments);

    if (!this.cachedMaps) {
      this.set('cachedMaps', EmberObject.create());
    }
    if (!this.mapUtil) {
      this.set('mapUtil', MapUtil.create());
    }
  },

  getMapElement(location) {
    let camelizedLocation = camelize(location);
    let element = this.get(`cachedMaps.${camelizedLocation}`);
    if (!element) {
      element = this.createMapElement();
      this.mapUtil.createMap(element, location);
      this.set(`cachedMaps.${camelizedLocation}`, element);
    }
    return element;
  },

  createMapElement() {
    let element = document.createElement('div');
    element.className = 'map';
    return element;
  },
});

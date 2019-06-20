import Service, { inject as service } from '@ember/service';
import { camelize } from '@ember/string';

export default class MapElementService extends Service {
  @service geocode;
  @service map;

  cachedMaps = {};

  async getMapElement(location) {
    let camelizedLocation = camelize(location);
    let element = this.cachedMaps[camelizedLocation];
    if (!element) {
      element = createMapElement();
      let geocodedLocation = await this.geocode.fetchCoordinates(location);
      this.map.createMap(element, geocodedLocation);
      this.cachedMaps[camelizedLocation] = element;
    }
    return element;
  }
}

function createMapElement() {
  let element = document.createElement('div');
  element.className = 'map';
  return element;
}

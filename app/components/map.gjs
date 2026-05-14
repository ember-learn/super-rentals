import Component from '@glimmer/component';
import { modifier } from 'ember-modifier';
import { trustHTML } from '@ember/template';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import ENV from 'super-rentals/config/environment';

const displayMap = modifier((element, [lat, lng, zoom]) => {
  const map = new maplibregl.Map({
    container: element,
    style: ENV.MAP_TILE_STYLE,
    center: [lng, lat],
    zoom,
  });

  new maplibregl.Marker().setLngLat([lng, lat]).addTo(map);

  return () => map.remove();
});

export default class Map extends Component {
  get mapSize() {
    return trustHTML(`width: ${this.args.width}px; height: ${this.args.height}px;`);
  }

  <template>
    <div class="map"
      {{displayMap @lat @lng @zoom}}
      style={{this.mapSize}}
      ...attributes
    ></div>
  </template>
}

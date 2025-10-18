import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

const TOMTOM_API = 'https://api.tomtom.com/map/1/staticimage';

export default class Map extends Component {
  get src() {
    let { lng, lat, width, height, zoom } = this.args;

    let coordinates = `&zoom=${zoom}&center=${lng},${lat}`;
    let dimensions = `&width=${width}&height=${height}`;
    let accessToken = `?key=${this.token}`;

    return `${TOMTOM_API}${accessToken}${coordinates}${dimensions}`;
  }

  get token() {
    return encodeURIComponent(ENV.TOMTOM_ACCESS_TOKEN);
  }

  <template>
    <div class="map">
      <img
        alt="Map image at coordinates {{@lat}},{{@lng}}"
        ...attributes
        src={{this.src}}
        width={{@width}} height={{@height}}
      >
    </div>
  </template>
}

/* globals google */
import Ember from 'ember';
import route from '../utils/directions';

export default Ember.Component.extend({

  didInsertElement() {
    this._super(...arguments);
    const map = new google.maps.Map(this.$('.map').get(0), {
      scrollwheel: false,
      zoom: 10
    });
    const directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    });
    Ember.run.scheduleOnce('afterRender', () => {
      this.set('map', map);
      this.set('directionsDisplay', directionsDisplay);
    });
  },

  didUpdateAttrs() {
    this._super(...arguments);
    if (this.get('startCoords') &&
        this.get('destCoords.latitude') !== 0 &&
        this.get('destCoords.longitude') !== 0) {
      route({
        destination: {
          lat: this.get('destCoords.latitude')(),
          lng: this.get('destCoords.longitude')()
        },
        origin: {
          lat: this.get('startCoords.latitude'),
          lng: this.get('startCoords.longitude')
        },
        travelMode: google.maps.TravelMode.DRIVING
      }).then((response) => {
        this.get('directionsDisplay').setDirections(response);
      }).catch((e) => Ember.Logger.error(e));
    } else {
      this.get('map').setCenter({
        lat: this.get('startCoords.latitude'),
        lng: this.get('startCoords.longitude')
      });
    }
  }
});

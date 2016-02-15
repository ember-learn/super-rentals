import Ember from 'ember';

const geolocation = navigator.geolocation;
const defaultCoordinates = {
  latitude: 0,
  longitude: 0
};

export default Ember.Service.extend({
  position: Ember.computed.reads('coordinates'),

  coordinates: defaultCoordinates,

  init() {
    this._super(...arguments);
    this._monitorPosition();
  },

  willDestroy() {
    this._super(...arguments);
    this._clearWatch();
  },

  _monitorPosition() {
    if (geolocation) {
      this._clearWatch();
      geolocation.watchPosition((position) => {
        this.set('coordinates', position.coords);
      });
    }
  },

  _clearWatch() {
    if (this.get('watchId')) {
      geolocation.clearWatch(this.get('watchId'));
    }
  }

});

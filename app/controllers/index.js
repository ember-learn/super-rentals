import Ember from 'ember';
import geocode from '../utils/geocoder';

export default Ember.Controller.extend({
  geolocation : Ember.inject.service(),
  selectedCoords: {
    latitude: 0,
    longitude: 0
  },

  actions: {
    select(unit) {
      this.set('selectedUnit', unit);
      geocode(unit.get('city')).then((result) => {
        this.set('selectedCoords', {
          latitude: result[0].geometry.location.lat,
          longitude: result[0].geometry.location.lng
        });
      }).catch((e)=> {
        Ember.Logger.error('error geocoding: ', e);
      });
    }
  }
});

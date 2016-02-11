/* globals google */
import Ember from 'ember';
const geocoder = new google.maps.Geocoder();
export default function geocode(location) {
  return new Ember.RSVP.Promise((resolve, reject) => {
    geocoder.geocode({address: location}, (result, status) => {
      if (status !== google.maps.GeocoderStatus.OK) {
        reject(status);
      } else {
        resolve(result);
      }
    });
  });
}

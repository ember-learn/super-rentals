/* globals google */
import Ember from 'ember';

const directionsService = new google.maps.DirectionsService();

export default function route(request) {
  return new Ember.RSVP.Promise((resolve, reject) => {
    directionsService.route(request, (response, status) => {
      if (status !== google.maps.DirectionsStatus.OK) {
        reject(status);
      } else {
        resolve(response);
      }
    });
  });
}

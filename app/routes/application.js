import Ember from 'ember';
import config from 'super-rentals/config/environment';
import injectScript from 'super-rentals/utils/inject-script';

export default Ember.Route.extend({
  model() {
    let src = `https://maps.googleapis.com/maps/api/js?v=3.22&key=${config.googleApiKey}`;
    return injectScript(src);
  }
});

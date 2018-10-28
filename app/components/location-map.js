import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  maps: service(),

  didInsertElement() {
    this._super(...arguments);
    let location = this.location;
    let mapElement = this.maps.getMapElement(location);
    this.$('.map-container').append(mapElement);
  }
});

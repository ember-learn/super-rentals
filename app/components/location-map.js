import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['map-container'],
  attributeBindings: ['aria-hidden:ariaHidden', 'tabindex'],
  ariaHidden: 'true',
  tabindex: '-1',

  mapElement: service(),

  didInsertElement() {
    this._super(...arguments);
    this.mapElement.getMapElement(this.location).then((mapElement) => {
      this.element.append(mapElement);
    });

  }
});

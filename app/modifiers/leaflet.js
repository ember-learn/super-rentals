import modifier from 'ember-functional-modifiers';

async function leaflet(mapElementService, element, [location]) {
  let mapElement = await mapElementService.getMapElement(location);
  element.append(mapElement);
}

export default modifier(
  { services: ['map-element'] },
  leaflet
);

import DS from 'ember-data';
const { Model, attr } = DS;

export default class RentalModel extends Model {
  @attr() title;
  @attr() owner;
  @attr() city;
  @attr() category;
  @attr() image;
  @attr() bedrooms;
  @attr() description;
}

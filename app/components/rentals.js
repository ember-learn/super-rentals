import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Rentals extends Component {
  @tracked query = '';
}

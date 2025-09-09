import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import Rental from 'super-rentals/components/rental';
import RentalsFilter from 'super-rentals/components/rentals/filter';

export default class Rentals extends Component {
  @tracked query = '';

  @action
  updateQuery(event) {
    let formData = new FormData(event.currentTarget);
    this.query = formData.get('rental-search-term');
  }

  @action
  handleSubmit(event) {
    event.preventDefault();
    this.updateQuery(event);
  }

  <template>
    <div class="rentals">
      <form {{on "input" this.updateQuery}} {{on "submit" this.handleSubmit}}>
        <label>
          <span>Where would you like to stay?</span>
          <input name="rental-search-term" class="light">
        </label>
        <p>The results below will update as you type.</p>
      </form>

      <ul class="results">
        <RentalsFilter @rentals={{@rentals}} @query={{this.query}} as |results|>
          {{#each results as |rental|}}
            <li><Rental @rental={{rental}} /></li>
          {{/each}}
        </RentalsFilter>
      </ul>
    </div>
  </template>
}

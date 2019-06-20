import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ListFilterComponent extends Component {
  @tracked results;

  constructor(...args) {
    super(...args);

    this.filter();
  }

  @action
  handleFilterEntry(event) {
    this.filter(event.target.value);
  }

  async filter(value) {
    let filterAction = this.args.filter;

    this.queriedValue = value;
    let { query, results } = await filterAction(value);

    if (query === this.queriedValue) {
      this.results = results;
    }
  }
}

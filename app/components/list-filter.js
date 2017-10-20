import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then((allResults) => this.set('results', allResults.results));
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((resultsObj) => {
        if (resultsObj.query === this.get('value')) {
          this.set('results', resultsObj.results);
        }
      });
    }
  }

});

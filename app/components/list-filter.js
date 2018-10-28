import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.filter('').then((allResults) => this.set('results', allResults.results));
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.value;
      let filterAction = this.filter;
      filterAction(filterInputValue).then((resultsObj) => {
        if (resultsObj.query === this.value) {
          this.set('results', resultsObj.results);
        }
      });
    }
  }

});

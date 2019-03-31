import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.store.query('rental', { city: param }).then((filteredResults) => {
          return { query: param, results: filteredResults };
        });
      } else {
        return this.store.findAll('rental').then((results) => {
          return { query: param, results: results };
        });
      }
    }
  }
});

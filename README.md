[![This project uses GitHub Actions for continuous integration.](https://github.com/ember-learn/super-rentals/workflows/CI/badge.svg)](https://github.com/ember-learn/super-rentals/actions?query=workflow%3ACI)

# Super Rentals

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

This is a working repository for the Super Rentals tutorial,
which you can check out at https://guides.emberjs.com/release/tutorial/.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)
* A [Mapbox API token](https://account.mapbox.com/access-tokens/) (with the "styles:tiles" scope)

## Installation

* `git clone <repository-url>` this repository
* `cd super-rentals`
* `yarn install`

## Running / Development

* `MAPBOX_ACCESS_TOKEN=YOUR_TOKEN ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`

### Building

* `MAPBOX_ACCESS_TOKEN=YOUR_TOKEN ember build` (development)
* `MAPBOX_ACCESS_TOKEN=YOUR_TOKEN ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

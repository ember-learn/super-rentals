# Super-rentals

Super-rentals is meant to be a working repository of the Ember tutorial: https://guides.emberjs.com/v2.3.0/tutorial/ember-cli/

This repo is currently *under development*.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with npm)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

There's an issue with ember-lodash (an npm prerequisite of ember-cli-mirage) where installation with npm 3.x results in the following error: 

```shell
ember s
Livereload server on http://localhost:49152
Serving on http://localhost:4200/
The Broccoli Plugin: [BroccoliMergeTrees] failed with:
Error: ENOENT: no such file or directory, lstat '/Users/jordanto/dev/super-rentals/node_modules/ember-lodash/node_modules/lodash-es'
    at Error (native)
    at Object.fs.lstatSync (fs.js:887:18)
    at symlink (/Users/jordanto/dev/super-rentals/node_modules/symlink-or-copy/index.js:60:26)
    at symlinkOrCopySync (/Users/jordanto/dev/super-rentals/node_modules/symlink-or-copy/index.js:55:5)
    at /Users/jordanto/dev/super-rentals/node_modules/broccoli-plugin/read_compat.js:58:9
    at lib$rsvp$$internal$$tryCatch (/Users/jordanto/dev/super-rentals/node_modules/rsvp/dist/rsvp.js:493:16)
    at lib$rsvp$$internal$$invokeCallback (/Users/jordanto/dev/super-rentals/node_modules/rsvp/dist/rsvp.js:505:17)
    at lib$rsvp$$internal$$publish (/Users/jordanto/dev/super-rentals/node_modules/rsvp/dist/rsvp.js:476:11)
    at lib$rsvp$asap$$flush (/Users/jordanto/dev/super-rentals/node_modules/rsvp/dist/rsvp.js:1198:9)
    at _combinedTickCallback (internal/process/next_tick.js:67:7)

The broccoli plugin was instantiated at:
    at BroccoliMergeTrees.Plugin (/Users/jordanto/dev/super-rentals/node_modules/broccoli-plugin/index.js:7:31)
    at new BroccoliMergeTrees (/Users/jordanto/dev/super-rentals/node_modules/ember-lodash/node_modules/broccoli-merge-trees/index.js:16:10)
    at BroccoliMergeTrees (/Users/jordanto/dev/super-rentals/node_modules/ember-lodash/node_modules/broccoli-merge-trees/index.js:10:53)
    at Class.module.exports.treeForAddon (/Users/jordanto/dev/super-rentals/node_modules/ember-lodash/index.js:14:17)
    at Class._treeFor (/Users/jordanto/dev/super-rentals/node_modules/ember-cli/lib/models/addon.js:322:31)
    at Class.treeFor (/Users/jordanto/dev/super-rentals/node_modules/ember-cli/lib/models/addon.js:290:19)
    at /Users/jordanto/dev/super-rentals/node_modules/ember-cli/lib/models/addon.js:244:32
    at Array.map (native)
    at Class.eachAddonInvoke (/Users/jordanto/dev/super-rentals/node_modules/ember-cli/lib/models/addon.js:242:22)
    at Class.treeFor (/Users/jordanto/dev/super-rentals/node_modules/ember-cli/lib/models/addon.js:289:20)
```

The current recommendation is to downgrade your NPM version to 2.x (available as part of the current Node LTS release).  See [Ember lodash issue #5](https://github.com/levanto-financial/ember-lodash/issues/5) for reference.

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

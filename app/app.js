import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'super-rentals/config/environment';
import { importSync, isDevelopingApp, macroCondition } from '@embroider/macros';
import { setBuildURLConfig } from '@ember-data/request-utils';

setBuildURLConfig({
  namespace: 'api',
});

/* This is to account for a deprecation that shipped in ember-cli 6.4
   with ember-data v5.6 which needs a blueprint update to avoid the
   deprecation that is otherwise irrelevant for tutorial purposes.
*/
import { registerDeprecationHandler } from '@ember/debug';
registerDeprecationHandler((message, options, next) => {
  if (message.includes('Using WarpDrive with EmberJS requires')) {
    return;
  } else {
    next(message, options);
  }
});

if (macroCondition(isDevelopingApp())) {
  importSync('./deprecation-workflow');
}

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);

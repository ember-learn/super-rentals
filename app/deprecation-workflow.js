import setupDeprecationWorkflow from 'ember-cli-deprecation-workflow';

/**
 * Docs: https://github.com/ember-cli/ember-cli-deprecation-workflow
 */
setupDeprecationWorkflow({
  /**
    false by default, but if a developer / team wants to be more aggressive about being proactive with
    handling their deprecations, this should be set to "true"
  */
  throwOnUnhandled: false,
  workflow: [
    /* ... handlers ... */
    /* to generate this list, run your app for a while (or run the test suite),
     * and then run in the browser console:
     *
     *    deprecationWorkflow.flushDeprecations()
     *
     * And copy the handlers here
     */
    /* example: */
    /* { handler: 'silence', matchId: 'template-action' }, */
    /**
     * TODO: actually fix these deprecations
     * this change to ember-cli-deprecation-workflow is hidden so people wont
     * see this in the tutorial.
     */
    { handler: 'silence', matchId: 'ember-data:deprecate-legacy-imports' },
    { handler: 'silence', matchId: 'warp-drive.deprecate-tracking-package' },
  ],
});

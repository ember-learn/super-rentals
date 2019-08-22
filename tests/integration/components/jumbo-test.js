import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | jumbo', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside a jumbo header with a tomster', async function(assert) {
    await render(hbs`<Jumbo>Hello World</Jumbo>`);

    assert.dom('.jumbo').exists();
    assert.dom('.jumbo').containsText('Hello World');
    assert.dom('.jumbo .tomster').exists();
  });
});

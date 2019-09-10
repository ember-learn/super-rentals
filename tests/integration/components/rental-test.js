import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | rental', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a rental property', async function(assert) {
    await render(hbs`<Rental />`);

    assert.dom('article').hasClass('rental');
    assert.dom('article h3').containsText('Grand Old Mansion');
    assert.dom('article .detail.owner').containsText('Veruca Salt');
    assert.dom('article .detail.type').containsText('Standalone');
    assert.dom('article .detail.location').containsText('San Francisco');
    assert.dom('article .detail.bedrooms').containsText('15');
    assert.dom('article .image').exists();
  });
});

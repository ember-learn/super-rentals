import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import Jumbo from 'super-rentals/components/jumbo';

module('Integration | Component | jumbo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside a jumbo header with a tomster', async function (assert) {
    await render(<template>
      <Jumbo>Hello World</Jumbo>
    </template>);

    assert.dom('.jumbo').exists();
    assert.dom('.jumbo').hasText('Hello World');
    assert.dom('.jumbo .tomster').exists();  
  });
});

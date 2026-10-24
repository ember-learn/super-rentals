import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render, rerender } from '@ember/test-helpers';
import Map from 'super-rentals/components/map';
import { tracked } from '@glimmer/tracking';

module('Integration | Component | map', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a map for the specified parameters', async function(assert) {
    await render(<template>
      <Map
        @lat="37.7797"
        @lng="-122.4184"
        @zoom="10"
        @width="150"
        @height="120"
      />
    </template>);

    assert
      .dom('.map')
      .exists()
      .hasAttribute('style', 'width: 150px; height: 120px;');
  });

  test('it updates the style when the dimensions change', async function(assert) {
    class State {
      @tracked width = 150;
      @tracked height = 120;
    }

    const state = new State();

    await render(<template>
      <Map
        @lat="37.7797"
        @lng="-122.4184"
        @zoom="10"
        @width={{state.width}}
        @height={{state.height}}
      />
    </template>);

    assert
      .dom('.map')
      .hasAttribute('style', 'width: 150px; height: 120px;');

    state.width = 300;
    state.height = 200;

    await rerender();

    assert
      .dom('.map')
      .hasAttribute('style', 'width: 300px; height: 200px;');
  });

  test('the attributes can be customized', async function(assert) {
    await render(<template>
      <Map
        @lat="37.7797"
        @lng="-122.4184"
        @zoom="10"
        @width="150"
        @height="120"
        role="img"
        aria-label="A map of San Francisco"
        class="my-map"
      />
    </template>);

    assert
      .dom('.map')
      .hasAttribute('role', 'img')
      .hasAttribute('aria-label', 'A map of San Francisco')
      .hasClass('my-map');
  });
});

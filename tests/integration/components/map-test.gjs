import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render, find, rerender } from '@ember/test-helpers';
import ENV from 'super-rentals/config/environment';
import Map from 'super-rentals/components/map';
import { tracked } from '@glimmer/tracking';

module('Integration | Component | map', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a map image for the specified parameters', async function (assert) {
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
      .dom('.map img')
      .exists()
      .hasAttribute('alt', 'Map image at coordinates 37.7797,-122.4184')
      .hasAttribute('src')
      .hasAttribute('width', '150')
      .hasAttribute('height', '120');

    let { src } = find('.map img');
    let token = encodeURIComponent(ENV.TOMTOM_ACCESS_TOKEN);

    assert.ok(
      src.startsWith('https://api.tomtom.com/'),
      'the src starts with "https://api.tomtom.com/"',
    );

    assert.ok(
      src.includes('zoom=10'),
      'the src should include the zoom parameter',
    );

    assert.ok(
      src.includes('center=-122.4184,37.7797'),
      'the src should include the lng,lat parameter',
    );

    assert.ok(
      src.includes(`key=${token}`),
      'the src should include the escaped access token',
    );
  });

  test('it updates the `src` attribute when the arguments change', async function (assert) {
    class State { 
      @tracked lat = 37.7749;
      @tracked lng = -122.4194;
      @tracked zoom = 10;
      @tracked width = 150;
      @tracked height = 120;
    };

    const state = new State();

    await render(<template>
      <Map
        @lat={{state.lat}}
        @lng={{state.lng}}
        @zoom={{state.zoom}}
        @width={{state.width}}
        @height={{state.height}}
      />
    </template>);

    let img = find('.map img');

    assert.ok(
      img.src.includes('zoom=10'),
      'the src should include the zoom parameter',
    );

    assert.ok(
      img.src.includes('-122.4194,37.7749'),
      'the src should include the lng,lat parameter',
    );

    assert.ok(
      img.src.includes('width=150'),
      'the src should include the width parameter',
    );

    assert.ok(
      img.src.includes('height=120'),
      'the src should include the height parameter',
    );

    state.width = 300;
    state.height = 200;
    state.zoom = 12;

    await rerender();

    assert.ok(
      img.src.includes('-122.4194,37.7749'),
      'the src should still include the lng,lat parameter',
    );

    assert.ok(
      img.src.includes('width=300'),
      'the src should include the updated width parameter',
    );

    assert.ok(
      img.src.includes('height=200'),
      'the src should include the updated height parameter',
    );

    assert.ok(
      img.src.includes('zoom=12'),
      'the src should include the updated zoom parameter',
    );

    state.lat = 47.6062;
    state.lng = -122.3321;

    await rerender();

    assert.ok(
      img.src.includes('center=-122.3321,47.6062'),
      'the src should include the updated lng,lat parameter',
    );
  });

  test('the default alt attribute can be overridden', async function (assert) {
    await render(<template>
      <Map
        @lat="37.7797"
        @lng="-122.4184"
        @zoom="10"
        @width="150"
        @height="120"
        alt="A map of San Francisco"
      />
    </template>);

    assert.dom('.map img').hasAttribute('alt', 'A map of San Francisco');
  });

  test('the src, width and height attributes cannot be overridden', async function (assert) {
    await render(<template>
      <Map
        @lat="37.7797"
        @lng="-122.4184"
        @zoom="10"
        @width="150"
        @height="120"
        src="/assets/images/teaching-tomster.png"
        width="200"
        height="300"
      />
    </template>);

    assert
      .dom('.map img')
      .hasAttribute('src', /^https:\/\/api\.tomtom\.com\//)
      .hasAttribute('width', '150')
      .hasAttribute('height', '120');
  });
});

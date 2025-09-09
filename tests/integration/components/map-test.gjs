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
    let token = encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);

    assert.ok(
      src.startsWith('https://api.mapbox.com/'),
      'the src starts with "https://api.mapbox.com/"',
    );

    assert.ok(
      src.includes('-122.4184,37.7797,10'),
      'the src should include the lng,lat,zoom parameter',
    );

    assert.ok(
      src.includes('150x120@2x'),
      'the src should include the width,height and @2x parameter',
    );

    assert.ok(
      src.includes(`access_token=${token}`),
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
      img.src.includes('-122.4194,37.7749,10'),
      'the src should include the lng,lat,zoom parameter',
    );

    assert.ok(
      img.src.includes('150x120@2x'),
      'the src should include the width,height and @2x parameter',
    );

    state.width = 300;
    state.height = 200;
    state.zoom = 12;

    await rerender();

    assert.ok(
      img.src.includes('-122.4194,37.7749,12'),
      'the src should include the lng,lat,zoom parameter',
    );

    assert.ok(
      img.src.includes('300x200@2x'),
      'the src should include the width,height and @2x parameter',
    );

    state.lat = 47.6062;
    state.lng = -122.3321;

    await rerender();

    assert.ok(
      img.src.includes('-122.3321,47.6062,12'),
      'the src should include the lng,lat,zoom parameter',
    );

    assert.ok(
      img.src.includes('300x200@2x'),
      'the src should include the width,height and @2x parameter',
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
      .hasAttribute('src', /^https:\/\/api\.mapbox\.com\//)
      .hasAttribute('width', '150')
      .hasAttribute('height', '120');
  });
});

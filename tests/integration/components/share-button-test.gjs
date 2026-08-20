import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import Service from '@ember/service';
import { find, render } from '@ember/test-helpers';
import ShareButton from 'super-rentals/components/share-button';

const MOCK_URL = new URL(
  '/foo/bar?baz=true#some-section',
  window.location.origin,
);

class MockRouterService extends Service {
  get currentURL() {
    return '/foo/bar?baz=true#some-section';
  }
}

function tweetParam(param) {
  let link = find('a');
  let url = new URL(link.href);
  return url.searchParams.get(param);
}

module('Integration | Component | share-button', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:router', MockRouterService);

  });

  test('basic usage', async function (assert) {
    await render(<template>
      <ShareButton>Tweet this!</ShareButton>
    </template>);

    assert
      .dom('a')
      .hasAttribute('target', '_blank')
      .hasAttribute('rel', 'external nofollow noopener noreferrer')
      .hasAttribute('href', /^https:\/\/twitter\.com\/intent\/tweet/)
      .hasClass('share')
      .hasClass('button')
      .containsText('Tweet this!');

    assert.strictEqual(tweetParam('url'), MOCK_URL.href);
  });

  test('it supports passing @text', async function (assert) {
    await render(<template>
      <ShareButton @text="Hello Twitter!">Tweet this!</ShareButton>
    </template>);

    assert.strictEqual(tweetParam('text'), 'Hello Twitter!');
  });

  test('it supports passing @hashtags', async function (assert) {
    await render(<template>
      <ShareButton @hashtags="foo,bar,baz">Tweet this!</ShareButton>
    </template>);

    assert.strictEqual(tweetParam('hashtags'), 'foo,bar,baz');
  });

  test('it supports passing @via', async function (assert) {
    await render(<template>
      <ShareButton @via="emberjs">Tweet this!</ShareButton>
    </template>);

    assert.strictEqual(tweetParam('via'), 'emberjs');
  });

  test('it supports adding extra classes', async function (assert) {
    await render(<template>
      <ShareButton class="extra things">Tweet this!</ShareButton>
    </template>);

    assert
      .dom('a')
      .hasClass('share')
      .hasClass('button')
      .hasClass('extra')
      .hasClass('things');
  });

  test('the target, rel and href attributes cannot be overridden', async function (assert) {
    await render(<template>
      <ShareButton target="_self" rel="" href="/">Not a Tweet!</ShareButton>
    </template>);

    assert
      .dom('a')
      .hasAttribute('target', '_blank')
      .hasAttribute('rel', 'external nofollow noopener noreferrer')
      .hasAttribute('href', /^https:\/\/twitter\.com\/intent\/tweet/);
   });

});

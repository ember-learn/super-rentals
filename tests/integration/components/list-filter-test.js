import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerKeyEvent, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';

module('Integration | Component | list-filter', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.actions = {};
    this.send = (actionName, ...args) => this.actions[actionName].apply(this, args);
  });

  const ITEMS = [{city: 'San Francisco'}, {city: 'Portland'}, {city: 'Seattle'}];
  const FILTERED_ITEMS = [{city: 'San Francisco'}];

  test('should initially load all listings', async function(assert) {
    assert.expect(2);
    this.set('filterByCity', () => resolve({ results: ITEMS }));

    await render(hbs`
      <ListFilter @filter={{action filterByCity}} as |results|>
        <ul>
        {{#each results as |item|}}
          <li class="city">
            {{item.city}}
          </li>
        {{/each}}
        </ul>
      </ListFilter>
    `);

    assert.equal(this.element.querySelectorAll('.city').length, 3);
    assert.dom(this.element.querySelector('.city')).hasText('San Francisco');
  });

  test('should update with matching listings', async function(assert) {
    this.set('filterByCity', (val) => {
      if (val === '') {
        return resolve({
          query: val,
          results: ITEMS });
      } else {
        return resolve({
          query: val,
          results: FILTERED_ITEMS });
      }
    });
    await render(hbs`
      <ListFilter @filter={{action filterByCity}} as |results|>
        <ul>
        {{#each results as |item|}}
          <li class="city">
            {{item.city}}
          </li>
        {{/each}}
        </ul>
      </ListFilter>
    `);

    await fillIn(this.element.querySelector('.list-filter input'),'s');
    await triggerKeyEvent(this.element.querySelector('.list-filter input'), "keyup", 83);

    assert.equal(this.element.querySelectorAll('.city').length, 1, 'One result returned');
    assert.dom(this.element.querySelector('.city')).hasText('San Francisco');
  });
});

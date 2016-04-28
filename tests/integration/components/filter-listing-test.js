import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';

moduleForComponent('filter-listing', 'Integration | Component | filter listing', {
  integration: true
});

const ITEMS = [{city: 'San Francisco'}, {city: 'Portland'}, {city: 'Seattle'}];
const FILTERED_ITEMS = [{city: 'San Francisco'}];

test('should initially load all listings', function (assert) {
  this.on('filterByCity', (val) => {
    if (val === '') {
      return Ember.RSVP.resolve(ITEMS);
    } else {
      return Ember.RSVP.resolve(FILTERED_ITEMS);
    }
  });

  this.render(hbs`
    {{#filter-listing filter=(action 'filterByCity') as |rentals|}}
      <ul>
      {{#each rentals as |item|}}
        <li class="city">
          {{item.city}}
        </li>
      {{/each}}
      </ul>
    {{/filter-listing}}
  `);

  return wait().then(() => {
    assert.equal(this.$('.city').length, 3);
    assert.equal(this.$('.city').first().text().trim(), 'San Francisco');
  });
});

test('should update with matching listings', function (assert) {
  this.on('filterByCity', (val) => {
    if (val === '') {
      return Ember.RSVP.resolve(ITEMS);
    } else {
      return Ember.RSVP.resolve(FILTERED_ITEMS);
    }
  });

  this.render(hbs`
    {{#filter-listing filter=(action 'filterByCity') as |rentals|}}
      <ul>
      {{#each rentals as |item|}}
        <li class="city">
          {{item.city}}
        </li>
      {{/each}}
      </ul>
    {{/filter-listing}}
  `);

  this.$('.filter-listing input').val('San').keyup();

  return wait().then(() => {
    assert.equal(this.$('.city').length, 1);
    assert.equal(this.$('.city').text().trim(), 'San Francisco');
  });
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('confirm-action-prompt', 'Integration | Component | confirm action prompt', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{confirm-action-prompt}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#confirm-action-prompt}}
      template block text
    {{/confirm-action-prompt}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

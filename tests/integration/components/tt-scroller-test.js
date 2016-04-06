import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tt-scroller', 'Integration | Component | tt scroller', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tt-scroller}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tt-scroller}}
      template block text
    {{/tt-scroller}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

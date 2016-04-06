import Ember from 'ember';
import scrollerMixin from 'ember-cli-scroller/mixins/scroller';
import { module, test } from 'qunit';

module('Unit | Mixin | scroller');

// Replace this with your real tests.
test('it works', function(assert) {
  let scrollerObject = Ember.Object.extend(scrollerMixin);
  let subject = scrollerObject.create();
  assert.ok(subject);
});

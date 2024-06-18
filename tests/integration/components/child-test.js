import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-bug-repo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | child', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Child />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Child>
        template block text
      </Child>
    `);

    assert.dom().hasText('template block text');
  });
});

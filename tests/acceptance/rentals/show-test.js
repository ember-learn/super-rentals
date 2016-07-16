import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | rentals/show');

test('should display specific rentals information', function(assert) {
  visit('/rentals/grand-old-mansion');

  andThen(function() {
    let rentalHeader = this.$('h2:contains("Grand Old Mansion")');
    assert.equal(rentalHeader.length, 1, 'should list rental title');
    assert.equal(this.$('.detail').length, 4, 'should list information about rental');
    assert.equal(this.$('.description').length, 1, 'should list additional description');
  });
});

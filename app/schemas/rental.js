import { withDefaults } from '@warp-drive/schema-record';
import { Type } from '@warp-drive/core-types/symbols';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

function rentalType(record) {
  if (COMMUNITY_CATEGORIES.includes(record.category)) {
    return 'Community';
  } else {
    return 'Standalone';
  }
}
rentalType[Type] = 'rentalType';

const RentalSchema = withDefaults({
  type: 'rental',
  fields: [
    { kind: 'field', name: 'title' },
    { kind: 'field', name: 'owner' },
    { kind: 'field', name: 'city' },
    { kind: 'field', name: 'location' },
    { kind: 'field', name: 'category' },
    { kind: 'field', name: 'image' },
    { kind: 'field', name: 'bedrooms' },
    { kind: 'field', name: 'description' },
    { kind: 'derived', type: 'rentalType', name: 'type' },
  ],
});

export function register(schema) {
  schema.registerDerivation(rentalType);
  schema.registerResource(RentalSchema);
}

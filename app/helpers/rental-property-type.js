import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export default helper(function rentalPropertyType([propertyType]) {
  if (communityPropertyTypes.includes(propertyType)) {
    return 'Community';
  }

  return 'Standalone';
});

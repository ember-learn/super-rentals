import { useLegacyStore } from '@warp-drive/legacy';
import { JSONAPICache } from '@warp-drive/json-api';
import { JsonSuffixHandler } from 'super-rentals/utils/handlers';

const Store = useLegacyStore({
  linksMode: false,
  cache: JSONAPICache,
  handlers: [
    // -- your handlers here
    JsonSuffixHandler
  ],
  schemas: [
    // -- your schemas here
  ],
});

export default Store;

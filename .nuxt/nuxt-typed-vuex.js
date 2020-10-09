// eslint-disable-next-line
const { createStore } = require('C:/Users/intel/Documents/Development/radio.lostfriendship.net/.nuxt/store');
// eslint-disable-next-line
const { getAccessorFromStore } = require('typed-vuex');
const storeAccessor = getAccessorFromStore(createStore());
export default async ({ store }, inject) => {
    inject('accessor', storeAccessor(store));
};
//# sourceMappingURL=plugin.js.map
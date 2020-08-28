/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import { RootModule } from '~/store/modules/root';

let RootStore: RootModule;

function initialiseStores(store: Store<any>): void {
  RootStore = getModule(RootModule, store);
}

export { initialiseStores, RootStore };

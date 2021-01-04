import { createStore } from 'vuex';

import productsModule from './modules/products/index.js';
import usersModule from './modules/users/index.js';
import requestsModule from './modules/requests/index.js';

export default createStore({
  state() {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products: productsModule,
    users: usersModule,
    requests: requestsModule
  }
});

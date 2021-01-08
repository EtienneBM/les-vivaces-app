import { createStore } from 'vuex';

import productsModule from './modules/products/index.js';
import usersModule from './modules/users/index.js';
import requestsModule from './modules/requests/index.js';

export default createStore({
  state() {
    return {
      currentUserId: 'U0001'
    }
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    currentUserId(state){
      return state.currentUserId;
    },
  },
  modules: {
    products: productsModule,
    users: usersModule,
    requests: requestsModule
  }
});

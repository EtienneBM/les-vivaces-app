import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            users: [
                {
                    id: 'U0001',
                    email: 'john.doe@mail.com',
                    firstNmae: 'John',
                    lastName: 'Doe',
                    ownProducts: ['P0001','P0002'],
                    favoriteProducts: [],
                },
                {
                    id: 'U0002',
                    email: 'julie.jones@mail.com',
                    firstNmae: 'Julie',
                    lastName: 'Jones',
                    ownProducts: ['P0003','P0004'],
                    favoriteProducts: [],
                }
            ]
        };
    },
    mutations,
    actions,
    getters
};
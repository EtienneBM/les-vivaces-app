import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            users: [
                {
                    id: '0001',
                    email: 'john.doe@mail.com',
                    firstNmae: 'John',
                    lastName: 'Doe',
                    ownProducts: ['0001','0002'],
                    favoriteProducts: [],
                }
            ]
        };
    },
    mutations,
    actions,
    getters
};
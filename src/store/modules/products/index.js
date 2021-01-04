import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            products: [
                {
                    id : '0001',
                    name: 'Begonia',
                    cost: 15,
                    description: 'Belle plante d\'intérieur',
                    ownerId: '0001',
                    category: 'Plante',
                },
                {
                    id : '0002',
                    name: 'Piléa',
                    cost: 12,
                    description: 'La plante préférée de Tiphaine',
                    ownerId: '0001',
                    category: 'Plante',
                },
            ]
        };
    },
    mutations,
    actions,
    getters
};
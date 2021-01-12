import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            lastFetch: null,
            products: [
                {
                    id : 'P0001',
                    name: 'Begonia',
                    cost: 15,
                    description: 'Belle plante d\'intérieur',
                    ownerId: 'U0001',
                    category: 'plant',
                },
                {
                    id : 'P0002',
                    name: 'Piléa',
                    cost: 12,
                    description: 'La plante préférée de Tiphaine',
                    ownerId: 'U0001',
                    category: 'plant',
                },
                {
                    id : 'P0003',
                    name: 'Sécateur',
                    cost: 20,
                    description: 'Le truc pour couper des plantes et des doigts si t\'es un psychopate',
                    ownerId: 'U0002',
                    category: 'equipment',
                },
                {
                    id : 'P0004',
                    name: 'Anthurium',
                    cost: 105,
                    description: "C'est petit c'est mignon c'est rare",
                    ownerId: 'U0002',
                    category: 'cutting',
                },
            ],
            currentProduct: {
                id : '',
                name: '',
                cost: null,
                description: '',
                ownerId: '',
                category: '',
            }
        };
    },
    mutations,
    actions,
    getters
};
export default {
    async addProduct(context, data) {
        const productId = 'prod_' + Math.random().toString(36).substr(2, 9);

        const productData = {
            name: data.name,
            cost: data.cost,
            description: data.description,
            ownerId: context.rootGetters.currentUserId,
            category: data.category,
        };
        
        const token = context.rootGetters.token;
        const response = await fetch(`https://learning-vue-1412-default-rtdb.europe-west1.firebasedatabase.app/products/${productId}.json?auth=` + token, {
            method: 'PUT',
            body: JSON.stringify(productData),
        });

        // const responseData = await response.json();

        if (!response.ok) {
            //errror ...
        }

        context.commit('addProduct', {
            ...productData,
            id: productId
        });
    },

    addCurrentProduct(context, data) {
        context.commit('addCurrentProduct', data);
    },

    async loadProducts(context, payload) {
        if(!payload.forceRefresh && !context.getters.shouldUpdate){
            return;
        }

        const response = await fetch(`https://learning-vue-1412-default-rtdb.europe-west1.firebasedatabase.app/products.json`);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(response.message || 'Failed to fetch');
            throw error;
        }

        const products = [];

        for (const key in responseData) {
            const prod = {
                id: key,
                name: responseData[key].name,
                cost: responseData[key].cost,
                description: responseData[key].description,
                ownerId: responseData[key].ownerId,
                category: responseData[key].category,
            };
            products.push(prod);
        }

        context.commit('setProducts', products);
        context.commit('setFetchTimestamp');
    }

};
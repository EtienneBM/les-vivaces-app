export default {
    async addProduct(context, data) {
        const ID = Math.random().toString(36).substr(2, 9);

        const productId = 'prod_' + ID;
        console.log(productId);

        const productData = {
            name: data.name,
            cost: data.cost,
            description: data.description,
            ownerId: context.rootGetters.currentUserId,
            category: data.category,
        };

        const response = await fetch(`https://learning-vue-1412-default-rtdb.europe-west1.firebasedatabase.app/products/${productId}.json`, {
            method: 'PUT',
            body: JSON.stringify(productData),
        });

        console.log(response);

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

    async loadProducts(context) {
        const response = await fetch(`https://learning-vue-1412-default-rtdb.europe-west1.firebasedatabase.app/products.json`);
        const responseData = await response.json();

        if (!response.ok) {
            //errror ...
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

        context.commit('setProducts', products)
    }

};
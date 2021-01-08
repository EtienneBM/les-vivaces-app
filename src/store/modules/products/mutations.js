export default {
    addProduct(state, payload){
        state.products.push(payload);
    },
    addCurrentProduct(state, payload){
        state.currentProduct = payload;
    },
    setProducts(state, payload) {
        state.products = payload;
    }
};
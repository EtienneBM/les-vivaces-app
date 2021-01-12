export default {
    products(state){
        return state.products;
    },
    hasProducts(state){
        return state.products && state.products.length > 0;
    },
    currentProduct(state){
        return state.currentProduct;
    },
    shouldUpdate(state){
        const lastFetch = state.lastFetch;
        if(!lastFetch){
            return true;
        }
        const currentTimestamp = new Date().getTime();
        return (currentTimestamp - lastFetch) / 1000 > 60;
    }
};
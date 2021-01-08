export default {
    requests(state, _, _2, rootGetters) {
        const userId = rootGetters.currentUserId;
        return state.requests.filter(req => req.ownerId === userId);
    },
    hasRequests(_, getters) {
        return getters.requests && getters.requests.length > 0;
    }
};
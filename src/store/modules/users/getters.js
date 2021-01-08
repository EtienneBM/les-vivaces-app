export default {
    users(state){
        return state.users;
    },
    isCurrentUser(_, getters, _2, rootGetters){
        const users = getters.users;
        const userId = rootGetters.currentUserId;
        return users.some(user => user.id === userId);
    },
    currentUser(_, getters, _2, rootGetters) {
        const userId = rootGetters.currentUserId;
        return getters.users.find(user => user.id === userId);
      },
};
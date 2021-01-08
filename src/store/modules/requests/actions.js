export default {
    contactUser(context, payload){
        const newRequest = {
            id: new Date().toISOString(),
            ownerId: payload.ownerId,
            userEmail: payload.email,
            message : payload.message
        };
        console.log(newRequest);
        context.commit('addRequest', newRequest);
    }
};
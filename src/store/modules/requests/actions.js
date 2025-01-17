export default {
    async contactUser(context, payload) {

        const newRequest = {
            userEmail: payload.email,
            message: payload.message
        };

        const response = await fetch(`https://learning-vue-1412-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.ownerId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest),
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request');
            throw error;
        }

        newRequest.id = responseData.name;
        newRequest.ownerId = payload.ownerId;

        context.commit('addRequest', newRequest);
    },

    async fetchRequests(context) {
        const currentUserId = context.rootGetters.currentUserId;
        const token = context.rootGetters.token;
        const response = await fetch(`https://learning-vue-1412-default-rtdb.europe-west1.firebasedatabase.app/requests/${currentUserId}.json?auth=`+token);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch request');
            throw error;
        }

        const requests = [];

        for (const key in responseData) {
            const req = {
                userEmail: responseData[key].userEmail,
                message: responseData[key].message,
                id: key,
                ownerId: currentUserId,
            };
            requests.push(req);
        }

        context.commit('setRequests', requests);
    }
};
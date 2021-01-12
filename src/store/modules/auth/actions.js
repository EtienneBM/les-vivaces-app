let timer;

export default {
    async login(context, payload) {
        return context.dispatch('auth', { ...payload, mode: 'login' });
    },

    async signup(context, payload) {
        return context.dispatch('auth', { ...payload, mode: 'signup' });
    },

    async auth(context, payload) {
        // attribution "dynamique" de l'url en fonction de signu ou login
        const mode = payload.mode;
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD64BLMTkuH6My_MGA5hJrzCocl-XR05ig';

        if (mode === 'signup') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD64BLMTkuH6My_MGA5hJrzCocl-XR05ig';
        }

        // demande d'authntifciation à firebase
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });
        const responseData = await response.json();

        if (!response.ok) {
            console.log("login error", responseData);
            const error = new Error(responseData.message || 'failed to authenticate.');
            throw error;
        }

        const expiresIn = +responseData.expiresIn * 1000;
        // const expiresIn = 5000; // pour tester l'auto-logout en 5 sec
        const expirationDate = new Date().getTime() + expiresIn;

        //stokage de l'utilisateur dans le navigateur
        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        //timer stocké dans une variable globale pour s'assurer qu'il n'y en ai qu'un seul
        //Permet d'auto-logout après une certaine durée
        timer = setTimeout(function () {
            context.dispatch('autoLogout');
        }, expiresIn);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
        })
    },

    tryLogin(context) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');

        const expiresIn = +tokenExpiration - new Date().getTime();

        if(expiresIn < 0){
            return;
        }

        timer = setTimeout(function(){
            context.dispatch('autoLogout');
        }, expiresIn);

        if (token && userId) {
            context.commit('setUser', { token: token, userId: userId });
        }
    },

    logout(context) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');

        clearTimeout(timer); // permet de clear le timer quand logout (utile pour le logout maunuel)

        context.commit('setUser', { token: null, userId: null });
    },

    autoLogout(context){
        context.dispatch('logout');
        context.commit('setAutoLogout');
    }
};
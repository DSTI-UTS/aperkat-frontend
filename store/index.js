export const state = () => ({
    isAuth: false,
    token: null,
    ardi: null
})

export const mutations = {
    SET_IS_AUTH(state, payload) {
        state.isAuth = payload
    },

    isAuthenticated(state) {
        return state.auth.loggedIn
    },

    loggedUser(state) {
        return state.auth.user
    },
    SET_USER_DATA(state, payload) {
        state.ardi = payload
    },

    SET_API_TOKEN(state, payload) {
        state.token = payload
    }
}

export const actions = {
    nuxtServerInit({ commit }, context) {
        if (context.app.$auth.strategy.token.status().valid()) {
            commit('SET_IS_AUTH', true);
            // console.log(context.app.$auth.$state);
            // console.log(context.app.$auth._token.laravelJWT);
        }
        
    }
}
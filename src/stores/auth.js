import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        token: useLocalStorage('token', null),
        username: useLocalStorage('username', null),
        avatar: useLocalStorage('avatar', null),
    }),
    getters: {
        isAuthenticated: (state) => !!state.token.value && !!state.username.value,
    },
    actions: {
        login(token, username, avatar) {
            this.token.value = token
            this.username.value = username
            this.avatar.value = avatar
        },
        logout() {
            this.token.value = null
            this.username.value = null
            this.avatar.value = null
        }
    }
})
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
        isAuthenticated () {
            return this.token !== null && this.username !== null && this.avatar !== null
        }
    },
    actions: {
        login(token, username, avatar) {
            this.token = token
            this.username = username
            this.avatar = avatar
        },
        logout() {
            this.token = null
            this.username = null
            this.avatar = null
        }
    }
})
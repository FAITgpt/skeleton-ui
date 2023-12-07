import { writable } from "svelte/store";
import type { User } from "firebase/auth";

const authStore = writable<{
    isLoggedIn: boolean,
    user?: User,
    email?: string,
}>({
    isLoggedIn: false,
})

export default {
    subscribe: authStore.subscribe,
    set: authStore.set
}
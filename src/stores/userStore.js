import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const fullName = ref('')
    const username = ref('')
    const phone = ref('')
    const email = ref('')
    const password = ref('')

    function setUser(data) {
        fullName.value = data.fullName
        username.value = data.username
        phone.value = data.phone
        email.value = data.email
        password.value = data.password
    }

    function resetUser() {
        fullName.value = ''
        username.value = ''
        phone.value = ''
        email.value = ''
        password.value = ''
    }

    return {
        fullName,
        username,
        phone,
        email,
        password,
        setUser,
        resetUser
    }
})

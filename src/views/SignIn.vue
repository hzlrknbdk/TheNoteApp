<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useStoreAuth } from '@/stores/storeAuth'
import { useRouter } from 'vue-router'
import Notification from '@/components/Notification.vue'

interface AuthState {
  email: string
  password: string
  id: string
}

const storeAuth = useStoreAuth()
const router = useRouter()
const messageNotification = ref<string>('')
const messageType = ref<string>('success')

let userAuth: AuthState = reactive({
  email: '',
  password: '',
  id: ''
})
const onSubmit = async () => {
  await storeAuth.signInWithEmailAndPassword(userAuth)
  if (storeAuth.isAuthenticated) {
    showSuccessMessage('İşlem başarılı!')

    setTimeout(() => {
      clearNotification()
      router.push('/')
    }, 2000)
  } else {
    showErrorMessage('Kullanıcı adı veya şifre hatalı!')
    clearUserAuth()
  }
}

const showSuccessMessage = (message: string) => {
  messageNotification.value = message
  messageType.value = 'success'
}

const showErrorMessage = (message: string) => {
  messageNotification.value = message
  messageType.value = 'danger'
}

const clearNotification = () => {
  messageNotification.value = ''
  messageType.value = ''
}

const clearUserAuth = () => {
  userAuth = { id: '', email: '', password: '' }
}
</script>

<template>
  <div style="width: 1000px; margin: 0 20%">
    <Notification v-if="messageNotification" :message="messageNotification" :type="messageType" />

    <form @submit.prevent="onSubmit" class="box has-background-grey-lighter">
      <div class="field">
        <label class="label is-size-6 has-text-weight-normal">Email</label>
        <div class="control">
          <input
            v-model="userAuth.email"
            class="input is-normal"
            type="email"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div class="field">
        <label class="label is-size-6 has-text-weight-normal">Password</label>
        <div class="control">
          <input
            v-model="userAuth.password"
            class="input is-normal"
            type="password"
            placeholder="********"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <p class="control">
          <button
            :disabled="!(userAuth.email && userAuth.password)"
            class="button is-normal is-dark"
          >
            Sign in
          </button>
        </p>
      </div>
    </form>
  </div>
</template>

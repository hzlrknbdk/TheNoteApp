<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useStoreAuth } from '@/stores/storeAuth'
import { useRouter } from 'vue-router'

interface AuthState {
  id: string
  email: string
  password: string
  passwordAgain: string
}

const router = useRouter()
const storeAuth = useStoreAuth()
const passwordMatch = ref(true)

const onSubmit = () => {
  if (passwordMatch.value) {
    storeAuth.createUserWithEmailAndPassword(userAuth)
    router.push('/')
  } else {
    alert('Şifreler eşleşmiyor!')
  }
}

const checkPasswordMatch = () => {
  passwordMatch.value = userAuth.password === userAuth.passwordAgain
}

const userAuth: AuthState = reactive({
  email: '',
  password: '',
  passwordAgain: '',
  id: ''
})
</script>

<template>
  <div style="width: 1000px; margin: 0 20%">
    <form @submit.prevent="onSubmit" class="box has-background-grey-lighter">
      <div class="field">
        <label class="label is-size-6 has-text-weight-normal">Email</label>
        <div class="control">
          <input
            v-model="userAuth.email"
            placeholder="Enter your email"
            class="input is-normal"
            type="email"
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

      <div class="field">
        <label class="label is-size-6 has-text-weight-normal">Password Again</label>
        <div class="control">
          <input
            v-model="userAuth.passwordAgain"
            @input="checkPasswordMatch"
            class="input is-normal"
            type="password"
            placeholder="********"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <p class="control">
          <button
            :disabled="!(userAuth.email && userAuth.password && userAuth.passwordAgain)"
            class="button is-normal is-dark"
          >
            Submit
          </button>
        </p>
        <p class="control">
          <a href="/signin" class="button is-normal is-light">Cancel</a>
        </p>
      </div>
    </form>
  </div>
</template>

<style scoped></style>

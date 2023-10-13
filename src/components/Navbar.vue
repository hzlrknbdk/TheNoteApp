<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useStoreAuth } from '@/stores/storeAuth'

const storeAuth = useStoreAuth()
const router = useRouter()

const logOut = () => {
  storeAuth.logOut()
  router.push('/signin')
}
</script>

<template>
  <nav class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <div class="is-size-4 ml-6">The NoteApp</div>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu" style="margin: 10px 5%">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <div v-if="!storeAuth.user.id">
              <a href="/signup" class="button is-normal">Sign up</a>
              <a href="/signin" class="button is-normal"> Sign in </a>
            </div>
            <button v-else @click="logOut" class="button is-normal">Log out</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

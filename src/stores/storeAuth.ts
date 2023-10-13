import {
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { auth } from '@/ts/firebase'
import { useStoreNotes } from '@/stores/storeNotes'

interface AuthState {
  id: string | number
  email: string
  password: string
}

export const useStoreAuth = defineStore('storeAuth', {
  state: () => ({
    user: { id: '', email: '', password: '' }
  }),
  actions: {
    initAuth() {
      const storeNotes = useStoreNotes()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email || ''
          const router = useRouter()
          storeNotes.init()
          if (router.currentRoute.value.path === '/signin') {
            router.push('/')
          }
        } else {
          this.user = { id: '', email: '', password: '' }
          storeNotes.clearNotes()
        }
      })
    },
    createUserWithEmailAndPassword(user: AuthState) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log(user)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    signInWithEmailAndPassword(users: AuthState) {
      signInWithEmailAndPassword(auth, users.email, users.password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log(user)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    logOut() {
      signOut(auth)
        .then(() => {
          console.log({ auth })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  getters: {
    isAuthenticated: (state) => {
      return state.user.id !== ''
    }
  }
})

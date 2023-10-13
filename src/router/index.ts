import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
// import { useStoreAuth } from '@/stores/storeAuth'
import NotesLayout from '@/views/NotesLayout.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: NotesLayout
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/notes-layout',
      name: '/notes-layout',
      component: NotesLayout
    }
  ]
})

// router.beforeEach(async (to, from) => {
//   const storeAuth = useStoreAuth()
//   if (!storeAuth.user.id && to.name !== 'signin') {
//     return { name: 'signin' }
//   }
//   if (storeAuth.user.id && to.name === 'signin') {
//     return false
//   }
// })

export default router

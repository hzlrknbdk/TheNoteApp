<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { onMounted } from 'vue'
import { useStoreAuth } from './stores/storeAuth'

const storeAuth = useStoreAuth()

onMounted(() => {
  storeAuth.initAuth()
})
</script>

<template>
  <div>
    <Navbar />
    <RouterView />
  </div>
</template>

<style></style>

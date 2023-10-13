<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  message: String,
  type: String
})

const show = ref<boolean>(true)

const messageTypeClass = computed(() => {
  return `is-${props.type}`
})

const dismiss = () => {
  show.value = false
}
</script>

<template>
  <div v-if="show" :class="['notification', messageTypeClass]">
    <button @click="dismiss" class="delete"></button>
    {{ message }}
  </div>
</template>

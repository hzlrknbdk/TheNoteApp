<script setup lang="ts">
import Menu from '@/components/Menu.vue'
import { ref, onMounted, watch } from 'vue'
import { marked } from 'marked'
import NoteContent from '@/views/NoteContent.vue'
const markdownText = ref('# Merhaba, Markdown!')
const renderedMarkdown = ref('')

const renderMarkdown = () => {
  renderedMarkdown.value = marked.parse(markdownText.value)
}

onMounted(renderMarkdown)

watch(markdownText, renderMarkdown)
</script>

<template>
  <div class="container">
    <div class="columns">
      <Menu />
      <NoteContent />
    </div>
  </div>
</template>

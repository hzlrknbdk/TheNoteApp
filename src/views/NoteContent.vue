<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { marked } from 'marked'

const markdownText = ref('# Merhaba, Markdown!')
const renderedMarkdown = ref('')

const renderMarkdown = () => {
  renderedMarkdown.value = marked.parse(markdownText.value)
}

onMounted(renderMarkdown)
watch(markdownText, renderMarkdown)
</script>

<template>
  <div class="column is-9" style="margin-top: 10%; margin-left: 3%">
    <div style="height: 70%; display: flex">
      <textarea style="padding: 15px" rows="4" cols="85" v-model="markdownText"></textarea>
      <div class="ml-6" style="border: 1px solid black">
        <div style="width: 450px; height: 100%; overflow: auto; padding: 30px">
          <div v-html="renderedMarkdown" />
        </div>
      </div>
    </div>
  </div>
</template>

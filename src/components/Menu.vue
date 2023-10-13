<script setup lang="ts"></script>

<template>
  <aside class="menu column is-3" style="margin-top: 8%">
    <p class="menu-label">Notes</p>
    <ul class="menu-list menu-content" style="max-height: 60%; overflow-y: auto; height: 750px">
      <li><a href="#">JavaScript</a></li>
      <li><a href="#">TypeScript</a></li>
      <li><a href="#">ReactJS</a></li>
      <li><a href="#">VueJs</a></li>
      <li><a href="#">Angular</a></li>
      <li><a href="#">NextJs</a></li>
      <li><a href="#">NuxtJs</a></li>
      <li><a href="#">NodeJs</a></li>
      <li><a href="#">JavaScript</a></li>
      <li><a href="#">TypeScript</a></li>
      <li><a href="#">ReactJS</a></li>
      <li><a href="#">VueJs</a></li>
      <li><a href="#">Angular</a></li>
      <li><a href="#">NextJs</a></li>
    </ul>

    <div class="is-flex">
      <button style="margin-top: 30px" class="button">
        <span class="icon">
          <i class="fas fa-lg fa-plus"></i>
        </span>
        <div class="has-text-dark">Add Note</div>
      </button>
    </div>
  </aside>
</template>

<style scoped>
.menu-label {
  max-height: 200px;
  overflow-y: auto;
}
</style>

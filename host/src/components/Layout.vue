<script setup></script>

<template>
  <div class="layout">
    <header class="layout__header">
      <slot name="header">Заголовок</slot>
    </header>
    <main class="layout__main">
      <slot />
    </main>
    <footer class="layout__footer">
      <slot name="footer">Футер</slot>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.layout__header, .layout__footer {
  background: #f5f5f5;
  padding: 16px;
  text-align: center;
}
.layout__main {
  flex: 1;
  padding: 24px;
}
</style> 
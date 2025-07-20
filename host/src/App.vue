<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav style="margin-bottom: 20px;">
    <router-link to="/user-profile" style="margin-right: 10px;">User Profile</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

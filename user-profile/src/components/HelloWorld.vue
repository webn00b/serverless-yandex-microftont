<script setup>
const users = [
  { id: 1, name: 'Иван Иванов' },
  { id: 2, name: 'Мария Петрова' },
  { id: 3, name: 'Алексей Смирнов' },
]
</script>

<template>
  <h1>Список пользователей</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>

<style scoped>
ul {
  padding-left: 1.5em;
}
li {
  margin-bottom: 0.5em;
}
</style>

<script setup>
import Layout from './Layout.vue';
import HelloWorld from './HelloWorld.vue';

</script> 

<template>
  <Layout>
    <template #header>
      Главная страница
    </template>
    <div>
      <h1>Добро пожаловать!</h1>
      <HelloWorld />
    </div>
    <template #footer>
      &copy; 2024
    </template>
  </Layout>
</template>


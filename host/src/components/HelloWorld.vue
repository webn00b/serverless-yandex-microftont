<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="description-container">
    <h1>Microfrontends on Vue 3 + Vite + Module Federation (Yandex Cloud Serverless)</h1>
    <h2>Описание</h2>
    <p>Этот репозиторий демонстрирует архитектуру микрофронтендов на Vue 3 с использованием Vite, Module Federation и деплоем в Яндекс.Облако (Serverless Containers).</p>
    <ul>
      <li><b>host</b> — контейнер-приложение, объединяющее микрофронты через Module Federation и Vue Router.</li>
      <li><b>user-profile</b> — микрофронт со списком пользователей.</li>
      <li><b>dashboard</b> — микрофронт с кнопкой-счётчиком.</li>
    </ul>
    <h2>Структура</h2>
    <pre><code>./host           # Host-приложение (роутинг, интеграция микрофронтов)
./user-profile   # Микрофронт user-profile
./dashboard      # Микрофронт dashboard</code></pre>
    <h2>Основные технологии</h2>
    <ul>
      <li>Vue 3</li>
      <li>Vite 7</li>
      <li>vite-plugin-federation (v1.x)</li>
      <li>Docker, nginx (c шаблоном и envsubst)</li>
      <li>Яндекс.Облако: Serverless Containers, Container Registry</li>
    </ul>
    <h2>Локальная разработка</h2>
    <ol>
      <li>Установите Node.js 20.x LTS (или 22.12.0+)</li>
      <li>В каждой папке выполните: <code>npm install</code></li>
      <li>Запустите микрофронты и host на разных портах:<br/>
        <pre><code>cd user-profile && npm run dev
cd dashboard && npm run dev
cd host && npm run dev</code></pre>
      </li>
      <li>Откройте host (обычно http://localhost:5173) — переходите по /user-profile и /dashboard.</li>
    </ol>
    <h2>Сборка и деплой в Яндекс.Облако</h2>
    <ol>
      <li>Соберите Docker-образы в каждой папке:<br/>
        <pre><code>npm run build
# или через docker-compose:
docker-compose build</code></pre>
      </li>
      <li>Пуш в Yandex Container Registry:<br/>
        <pre><code>docker build --platform=linux/amd64 -t cr.yandex/&lt;registry_id&gt;/user-profile:v1 ./user-profile
docker build --platform=linux/amd64 -t cr.yandex/&lt;registry_id&gt;/dashboard:v1 ./dashboard
docker build --platform=linux/amd64 -t cr.yandex/&lt;registry_id&gt;/host:v1 ./host

docker push cr.yandex/&lt;registry_id&gt;/user-profile:v1
docker push cr.yandex/&lt;registry_id&gt;/dashboard:v1
docker push cr.yandex/&lt;registry_id&gt;/host:v1</code></pre>
      </li>
      <li>Создайте серверлесс-контейнеры в Яндекс.Облаке для каждого микрофронта и host.<br/>
        В качестве образа укажите ссылку из Container Registry.<br/>
        После создания получите публичные endpoint'ы.
      </li>
      <li>Настройте Module Federation в <code>host/vite.config.js</code> с актуальными endpoint'ами.</li>
      <li>Пересоберите и задеплойте host с актуальными remoteEntry.js</li>
    </ol>
    <h2>Пример роутинга в host</h2>
    <ul>
      <li><code>/user-profile</code> — отображает user-profile микрофронт</li>
      <li><code>/dashboard</code> — отображает dashboard микрофронт</li>
    </ul>
    <h2>Полезные ссылки</h2>
    <ul>
      <li><a href="https://yandex.cloud/ru/docs/serverless-containers/quickstart/container" target="_blank">Документация Яндекс.Облака: Serverless Containers</a></li>
      <li><a href="https://github.com/originjs/vite-plugin-federation" target="_blank">vite-plugin-federation (GitHub)</a></li>
      <li><a href="https://router.vuejs.org/" target="_blank">Vue Router</a></li>
    </ul>
    <h2>Авторы</h2>
    <ul>
      <li><a href="https://github.com/webn00b/" target="_blank">webn00b</a></li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.description-container {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.08);
  padding: 32px 24px;
  margin: 32px auto;
  max-width: 800px;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
}
.description-container h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5em;
  color: #2c3e50;
}
.description-container h2 {
  font-size: 1.3rem;
  margin-top: 2em;
  margin-bottom: 0.7em;
  color: #3a5ba0;
  border-left: 4px solid #42b983;
  padding-left: 10px;
}
.description-container ul,
.description-container ol {
  margin-left: 1.5em;
  margin-bottom: 1em;
}
.description-container li {
  margin-bottom: 0.4em;
  line-height: 1.6;
}
.description-container p {
  margin-bottom: 1em;
  line-height: 1.7;
}
.description-container code,
.description-container pre {
  background: #f6f8fa;
  color: #c7254e;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.97em;
}
.description-container pre {
  padding: 12px;
  overflow-x: auto;
  margin-bottom: 1em;
}
.description-container a {
  color: #42b983;
  text-decoration: underline;
  transition: color 0.2s;
}
.description-container a:hover {
  color: #2c3e50;
}
</style>

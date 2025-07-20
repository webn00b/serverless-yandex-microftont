# Microfrontends on Vue 3 + Vite + Module Federation (Yandex Cloud Serverless)

## Описание

Этот репозиторий демонстрирует архитектуру микрофронтендов на Vue 3 с использованием Vite, Module Federation и деплоем в Яндекс.Облако (Serverless Containers).

- **host** — контейнер-приложение, объединяющее микрофронты через Module Federation и Vue Router.
- **user-profile** — микрофронт со списком пользователей.
- **dashboard** — микрофронт с кнопкой-счётчиком.

## Структура

```
./host           # Host-приложение (роутинг, интеграция микрофронтов)
./user-profile   # Микрофронт user-profile
./dashboard      # Микрофронт dashboard
```

## Основные технологии
- Vue 3
- Vite 7
- vite-plugin-federation (v1.x)
- Docker, nginx (c шаблоном и envsubst)
- Яндекс.Облако: Serverless Containers, Container Registry

## Локальная разработка

1. Установите Node.js 20.x LTS (или 22.12.0+)
2. В каждой папке выполните:
   ```bash
   npm install
   ```
3. Запустите микрофронты и host на разных портах:
   ```bash
   cd user-profile && npm run dev
   cd dashboard && npm run dev
   cd host && npm run dev
   ```
4. Откройте host (обычно http://localhost:5173) — переходите по /user-profile и /dashboard.

## Сборка и деплой в Яндекс.Облако

### 1. Сборка Docker-образов

В каждой папке:
```bash
npm run build
# или через docker-compose:
docker-compose build
```

### 2. Пуш в Yandex Container Registry

```bash
docker build --platform=linux/amd64 -t cr.yandex/<registry_id>/user-profile:v1 ./user-profile
docker build --platform=linux/amd64 -t cr.yandex/<registry_id>/dashboard:v1 ./dashboard
docker build --platform=linux/amd64 -t cr.yandex/<registry_id>/host:v1 ./host

docker push cr.yandex/<registry_id>/user-profile:v1
docker push cr.yandex/<registry_id>/dashboard:v1
docker push cr.yandex/<registry_id>/host:v1
```

### 3. Создание серверлесс-контейнеров

- В Яндекс.Облаке создайте контейнеры для каждого микрофронта и host.
- В качестве образа укажите ссылку из Container Registry (например, `cr.yandex/<registry_id>/user-profile:v1`).
- После создания получите публичные endpoint'ы.

### 4. Настройка Module Federation в host

В `host/vite.config.js`:
```js
remotes: {
  'user-profile': 'https://<user-profile-endpoint>/assets/remoteEntry.js',
  'dashboard': 'https://<dashboard-endpoint>/assets/remoteEntry.js',
}
```

- `<user-profile-endpoint>` и `<dashboard-endpoint>` — публичные endpoint'ы контейнеров user-profile и dashboard.

### 5. Пересоберите и задеплойте host с актуальными remoteEntry.js

---

## Важно для serverless-контейнеров Яндекса
- Используется nginx с шаблоном конфига и запуском через start.sh (envsubst подставляет PORT).
- Для SPA-роутинга в nginx:
  ```nginx
  location / {
      try_files $uri $uri/ /index.html;
  }
  ```
- Все микрофронты и host должны быть доступны по публичным endpoint'ам.

---

## Пример роутинга в host

- `/user-profile` — отображает user-profile микрофронт
- `/dashboard` — отображает dashboard микрофронт

---

## Полезные ссылки
- [Документация Яндекс.Облака: Serverless Containers](https://yandex.cloud/ru/docs/serverless-containers/quickstart/container)
- [vite-plugin-federation (GitHub)](https://github.com/originjs/vite-plugin-federation)
- [Vue Router](https://router.vuejs.org/)

---

## Авторы
- https://github.com/webn00b/
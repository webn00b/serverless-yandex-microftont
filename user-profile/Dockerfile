# 1. Билдим приложение
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# 2. Сервер для статики (nginx)
FROM nginx:1.25-alpine
RUN apk add --no-cache gettext
COPY nginx.template.conf /etc/nginx/templates/default.conf.template
COPY start.sh /start.sh
RUN chmod +x /start.sh
COPY --from=build /app/dist /usr/share/nginx/html
CMD ["/start.sh"] 
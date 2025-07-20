#!/bin/sh

# Подставляем переменную PORT в конфиг
envsubst '$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf

# Запускаем nginx
exec nginx -g "daemon off;"

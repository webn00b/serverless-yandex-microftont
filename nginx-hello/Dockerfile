FROM nginx:1.25-alpine

# Установим envsubst
RUN apk add --no-cache gettext

COPY nginx.template.conf /etc/nginx/templates/default.conf.template
COPY hello.txt /usr/share/nginx/html/hello.txt
COPY start.sh /start.sh
RUN chmod +x /start.sh

ENTRYPOINT []
CMD ["/start.sh"]

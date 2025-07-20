FROM node:16-slim

WORKDIR /app
RUN npm install express
COPY ./server.js .

CMD [ "node", "server.js" ]
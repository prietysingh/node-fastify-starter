FROM node:13-slim

WORKDIR /app

ADD . /app

CMD node main.js
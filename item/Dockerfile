FROM node:11.9-alpine

ENV TZ=Europe/Moscow
RUN apk add --no-cache tzdata bash curl

WORKDIR /home/node/item

COPY ./ ./

RUN npm install
RUN npm run build

ENTRYPOINT npm run $RUN_ENV

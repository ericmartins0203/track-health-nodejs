FROM node:16

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

ENV NODE_PATH=./src
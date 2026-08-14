# DEV
# FROM node:19-alpine3.15 AS dev
FROM node:22-alpine3.23 AS dev
WORKDIR /app
COPY package.json ./
RUN yarn install
# COPY . .
# Opcion 1 - Ejecutar la app desde Dockerfile
CMD [ "yarn", "start:dev" ]


# DEv-DEPS
# FROM node:19-alpine3.15 as dev-deps
FROM node:22-alpine3.23 AS dev-deps
WORKDIR /app
COPY package.json package.json
# --frozen-lockfile - evita que yarn modifique o genere un nuevo archivo yarn.lock. Si el package.json y el yarn.lock no coinciden, el proceso se detiene con un error.
RUN yarn install --frozen-lockfile 


# BUILDER
# FROM node:19-alpine3.15 as builder
FROM node:22-alpine3.23 AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN yarn build


# PROD-DEPS
# FROM node:19-alpine3.15 as prod-deps
FROM node:22-alpine3.23 AS prod-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --prod --frozen-lockfile


# PROD
# FROM node:19-alpine3.15 as prod
FROM node:22-alpine3.23 AS prod
EXPOSE 3000
WORKDIR /app
ENV APP_VERSION=${APP_VERSION}
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD [ "node","dist/main.js"]

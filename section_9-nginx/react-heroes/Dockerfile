# DEV-DEPS
FROM node:24-alpine3.23 AS dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile


# BUILDER
FROM node:24-alpine3.23 AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN yarn build


# NGINX
FROM nginx:1.31.7 AS prod
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;" ]
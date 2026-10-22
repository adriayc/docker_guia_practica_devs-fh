# DEPS
FROM node:24.18.0-alpine3.24 AS deps
WORKDIR /app
COPY package.json ./
RUN npm install


# BUILDER Y TEST
FROM node:24.18.0-alpine3.24 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test
# RUN npm run build


# DEPS FROM PROD
FROM node:24.18.0-alpine3.24 AS deps-prod
WORKDIR /app
COPY package.json ./
RUN npm install --prod


# RUNNER
FROM node:24.18.0-alpine3.24 AS runner
WORKDIR /app
COPY --from=deps-prod /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
CMD [ "node", "app.js" ]
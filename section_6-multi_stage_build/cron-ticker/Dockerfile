# Crear un nuevo escenario de compilación a partir de una imagen base
# FROM node:24.18.0-alpine3.24
FROM --platform=$BUILDPLATFORM node:24.18.0-alpine3.24 AS build

# Cambiar directorio de trabajo (`/app` - ruta de node)
WORKDIR /app

# Copiar archivos y directorios
COPY package.json ./

# Ejecutar comandos de compilación (Instalar dependencias)
RUN npm install

# Copiar archivos y directorios
COPY . .

# Ejecutar comandos de compilación (Ejecutar test con Jest)
RUN npm run test


# Eliminar archivos y directorios innecesarios para PROD
RUN rm -rf tests && rm -rf node_modules

# Instalar solo dependencias de PROD
RUN npm install --prod


# Especifica los comandos predeterminados (Ejecutar al app)
CMD [ "node", "app.js" ]
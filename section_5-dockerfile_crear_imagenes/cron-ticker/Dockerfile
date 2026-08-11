# Crear una nueva escenario de compilación a partir de una imagen base
FROM node:24.18.0-alpine3.24

# Cambiar directorio de trabajo ('/app' - ruta creada por node)
WORKDIR /app        

# Copiar archivos y directorios
COPY package.json ./

# Ejecutar comandos de compilación (Instalar dependencias)
RUN npm install

# Copiar archivos y directorios al WORKDIR
COPY . .

# Realizar testing (Jest)
RUN npm run test


# Eliminar archivos y directorios innecesarios de PROD
RUN rm -rf tests && rm -rf node_modules

# Instalar unicamente las dependencias de PROD
RUN npm install ---prod


# Especifique los comandos predeterminados (Ejecuta la app)
CMD [ "node", "app.js" ]
# Crear una nueva escenario de compilación a partir de una imagen base
FROM node:24.18.0-alpine3.24

# Cambiar directorio de trabajo ('/app' - ruta creada por node)
WORKDIR /app        

# Copiar archivos y directorios
COPY app.js package.json ./

# Ejecutar comandos de compilación (Instalar dependencias)
RUN npm install

# Especifique los comandos predeterminados (Ejecuta la app)
CMD [ "node", "app.js" ]
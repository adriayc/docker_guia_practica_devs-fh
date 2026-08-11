DOCKERFILE (CREAR IMÁGENES)

* Docker
    - Taks:
        + Cron-Ticker
            * Inicializar una app Node.js
                $ npm init
                    > package name: (cron-ticker) ENTER
                    ...
                    > author: Adriano Ayala
                    > license: (ISC) ENTER
                    > type: (commonjs) ENTER
                    Is this OK? (yes) ENTER
            * Crear un archivo app.js
            * Ejecutar el archivo `node app.js` con Node.js.
            * Ejecutar la app `npm start` o `npm run start`.
            * Instalar la dependencia `node-cron` en la app.
                $ npm install node-cron
            * Ejecutar la app nuevamente
                $ npm start
            * Detener la ejecución con `CTRL + C`.

            Dockerfile
            * Crear el archivo `Dockerfile` y construir la imagen.
            * Crear una imagen a partir de un Dockerfile
                $ docker image build --tag cron-ticker .        # --tag name:tag (el tag es `latest` si no se define) y PATH (. esta en el directorio de trabajo actual) del `Dockerfile`
                $ docker build --tag cron-ticker .
            * Listar imagenes
                $ docker image ls
            * Crear y ejecuta una nuevo contenedor a partir de una imagen
                $ docker container run cron-ticker
            * Detener la ejecución con `CTRL + C`.
            * Listar imagenes
                $ docker image ls
            * Eliminar el contenedor
                $ docker container rm -f 21cb5e65bc8f
            
            Agregar etiquetas `tag`
            * Modificar el codigo de la app y las instrucción de `Dockerfile`.
            * Crear una imagen a partir del Dockerfile
                $ docker image build --tag cron-ticker:1.0.0 .                  # Definimos el tag
            * Crear y ejecuta una nuevo contenedor a partir de una imagen
                $ docker container run cron-ticker
            * Detener la ejecución con `CTRL + C`.
            * Listar imagenes
                $ docker image ls
            * Crear un etiqueta TARGET_IMAGE que haga referencia a SOURCE_IMAGE
                $ docker image tag cron-ticker:1.0.0 cron-ticker:bufalo
            * Modificamos el codigo de la app.
            * Crear una imagen a partir del Dockerfile
                $ docker image build --tag cron-ticker .                  # Port defecto el tag es `latest`
            * Listar imagenes
                $ docker image ls
            * Crear un etiqueta TARGET_IMAGE que haga referencia a SOURCE_IMAGE
                $ docker image tag cron-ticker cron-ticker:castor
            * Listar imagenes
                $ docker image ls
            * Crear y ejecuta una nuevo contenedor a partir de una imagen
                $ docker container run cron-ticker:castor                   # con tag `castor`
                $ docker container run cron-ticker:bufalo                   # con tag `bufalo`
            * Listar los contenedores
                $ docker container ls
            * Eliminar los contenedores
                $ docker container rm -f 6ed3e756ded3 9da6bf1effbe

            Subir image a Docker Hub
            * Sign up / Sign in
            * Create a new respository (My Hub > Repositories > Click 'Create respository')
                > Repository Name: cron-ticker
                > Short description: {{ADD_SHORT_DESCRIPTION}}
                > [TRUE] Public
                Click 'Create'
            * Listar imagenes
                $ docker image ls
            * Crear un nuevo alias o etiqueta para una imagen local
                $ docker image tag cron-ticker:latest adriayc/cron-ticker:latest
                $ docker image tag cron-ticker adriayc/cron-ticker                      // Si no especificamos el TAG es `latest`
            * Login en Hub
                $ docker login
            * Cerrar sessión en Hub (Optional)
                $ docker logout
            * Subir una imagen a un registro
                $ docker push adriayc/cron-ticker:latest
                $ docker push adriayc/cron-ticker                                       // Si no especificamos el TAG es `latest`
            * Habilitar el análisis de imagenes (MY_IMAGE > Settings > Image security insight settings)
                > [TRUE] Select Docker Scout iamge analysis
                Click 'Save'
            * Crear un nuevo alias o etiqueta para una imagen local
                $ docker image tag adriayc/cron-ticker:latest adriayc/cron-ticker:castor
            * Subir una imagen a un registro
                $ docker push adriayc/cron-ticker:castor

            Descargar imagen de Docker Hub
            * Eliminar imágenes no utilizadas
                $ docker image prune
            * Eliminar todas las imágenes no utilizadas
                $ docker image prune -a
            * Crear y ejecutar un nuevo contenedor a partir de una imagen del Hub
                $ docker container run adriayc/cron-ticker:castor
            * Listar contenedores
                $ docker container ls
            * Eliminar contenedores
                $ docker container rm -f fec9bf465fca
            
            Pruebas automáticas al código
            * Instalar la dependencia de Jest (Pruebas para JavaScript)
                $ npm install --save-dev jest
            * Modificar el código.
            * Ejecutar la app
                $ npm run start
                $ npm start
            * Agregar la pruebas al código.
            * Ejecutar la test
                $ npm run test

            Integrar testing en la construcción
            * Agregar `RUN npm run test` en Dockerfile.
            * Listar imagenes
                $ docker image ls
            * Construir una imagen a partir de un Dockerfile
                $ docker build -t adriayc/cron-ticker:mapache .
            
            Examinar la imagen
            * Mostrar imagenes
                $ docker image ls
            * Crea y ejecuta un nuevo contenedor a partir de una imagen
                $ docker container run -d adriayc/cron-ticker:mapache       // Modo detach 
            * Listar contenedores
                $ docker container ls
            * Ejecutar un comando en un contenedor en ejecución
                $ docker exec -it a087323548c0 /bin/sh
                > /app # ls -l                  // Listar archivos y directorios
                > /app # exit                   // Para salir
            
            Archivo `.dockerignore`
            * Crear y agregar los directorios & archivos en el `.dockerignore`.
            * Construir la iamge a partir de un Dockerfile
                $ docker build -t adriayc/cron-ticker:tigre .
            * Crea y ejecuta un nuevo contenedor a partir de una imagen
                $ docker container run -d adriayc/cron-ticker:tigre         // Modo detach 
            * Ejecutar un comando en un contenedor en ejecución
                $ docker exec -it 00cb7ae5cfce /bin/sh
                > /app # ls -la                 // Mostrar todos los archivos y directorios
                > /app # exit                   // Para Salir

            Remover archivos y carpetas de la imagen
            * Listar los contenedores
                $ docker container ls
            * Eliminar los contenedores
                $ docker container rm -f 8d6821941297 a087323548c0
            * Eliminar los archivos innecesario e instalar dependencias solo de Producción en `Dockerfile`.
            * Construir la iamge a partir de un Dockerfile
                $ docker build -t adriayc/cron-ticker:pantera .
            * Crea y ejecuta un nuevo contenedor a partir de una imagen
                $ docker container run -d adriayc/cron-ticker:pantera         // Modo detach 
            * Listar contenedores
                $ docker container ls
            * Ejecutar un comando en un contenedor en ejecución
                $ docker exec -it a6e0b780828f /bin/sh
                > /app # ls -la                 // Mostrar todos los archivos y directorios
                > /app # exit                   // Para Salir
            
            Subir imagen a Hub
            * Listar imagenes
                $ docker image ls
            * Crear un nuevo alias o etiqueta para una imagen local
                $ docker image tag adriayc/cron-ticker:pantera adriayc/cron-ticker:latest
            * Subir imagenes a Hub
                $ docker push adriayc/cron-ticker:mapache
                $ docker push adriayc/cron-ticker:pantera
                $ docker push adriayc/cron-ticker:latest
            
            Forzar una plataforma de construcción
            * Especificar la plataforma en `Dockefile`.
            * Construir la iamge a partir de un Dockerfile
                $ docker build -t adriayc/cron-ticker .             // Si no especificamos el TAG será `latest`
            * Listar imagenes
                $ docker image ls
            * Subir imagen a Hub
                $ docker push adriayc/cron-ticker

            Construcción en multiples arquitecturas (Buildx)
            * Lista las instancias de builder
                $ docker buildx ls
            * Crear y usa un custom builder
                $ docker buildx create \
                --name my-builder \
                --driver docker-container \
                --bootstrap --use
            * Lista las instancias de builder
                $ docker buildx ls
            * Establece la instancia actual de builder
                $ docker buildx use my-builder
            * Inspeccionar la instanacia actual de builder
                $ docker buildx inspect my-builder
            * Agregar el `--platform=$BUILDPLATFORM` en el Dockerfile.
            * Iniciar una construcción y sube al Hub
                $ docker buildx build \
                --platform linux/amd64,linux/arm64,linux/arm/v7,linux/arm/v8 \
                -t adriayc/cron-ticker:polar --push .
                $ docker buildx build \
                --platform linux/amd64,linux/arm64,linux/arm/v7,linux/arm/v8 \
                -t adriayc/cron-ticker:latest --push .                              // Es recomendable subir la versión `latest` después de una version específica.
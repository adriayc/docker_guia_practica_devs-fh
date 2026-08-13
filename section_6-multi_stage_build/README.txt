MULTI-STAGE BUILD

* Docker
    - Apps
        + Cron-Ticker (Node.js)
            * Inicializar una app Node.js
                - Crear la app
                    $ mkdir cron-ticker
                    $ cd cron-ticker
                    $ npm init
                        > package name: (cron-ticker) ENTER
                        ...
                        > entry point: (index.js) app.js
                        > author: Adriano Ayala
                        > license: (ISC) ENTER
                        > type: (commonjs) ENTER
                        Is this OK? (yes) ENTER
                    NOTA: Agregar y configurar todos los archivos necesarios!!!
                    $ npm run start ó npm start             // Ejecutar la app
                    $ npm run test                          // Ejecutar los test
                - Instalar dependencias
                    + Node-Cron
                        $ npm install node-cron
                    + Jest
                        $ npm install --save-dev jest
            * Tareas:
                - Multi-State Build
                    * Configurar el multi-stage build en `Dockerfile`.
                    * Construir la imagen a partir del Dockerfile
                        $ docker build -t adriayc/cron-ticker:gato .
                        $ docker build -t adriayc/cron-ticker:latest .
                    * Listar imagenes
                        $ docker image ls
                    * Crea y ejecuta un nuevo contenedor a partir de una image
                        $ docker container run adriayc/cron-ticker:latest
                - Subir la imagen a Hub
                    * Listar las imagenes
                        $ docker image ls
                    * Subir una imagen al registro
                        $ docker push adriayc/cron-ticker:gato
                        $ docker push adriayc/cron-ticker:latest
                - Buildx construir para otras arquitecturas
                    * Listar las intefaces builder
                        $ docker buildx ls
                    * Crear una nueva instancia personalizada de builder
                        $ docker buildx create \
                        --name my-builder \
                        --driver docker-container \
                        --boostrap --use
                    * Establecer la instancia actual del builder
                        $ docker buildx use my-builder
                    * Listar las intefaces builder
                        $ docker buildx ls
                    * Iniciar una construcción y subir a Hub
                        $ docker buildx build \
                        --platform=linux/amd64,linux/arm64,linux/arm/v7 \
                        -t adriayc/cron-ticker:lince --push .
                        $ docker buildx build \
                        --platform=linux/amd64,linux/arm64,linux/arm/v7 \
                        -t adriayc/cron-ticker --push .                                // Si no se especifica el TAG es latest
                    * Mostrar detalles de una imagen en el registro
                        $ docker buildx imagetools inspect adriayc/cron-ticker:lince

        + Teslo-Shop (Nestjs)
            * Inicializar la app
                - Copiar o clonar la app `teslo-shop`.
                    $ yarn install              // Instalar las dependencias
                    NOTA: Leer las instrucciones del `README.md` para levantar la app!!!
                    $ yarn start:dev            // Ejecutar la app

            * Tareas:
                - Preparación de la app
                    + Copiar o clonar la app `teslo-shop`.
                    + Leer las instrucciones del `README.md` para levantar la app.
                    + Construir o reconstruir servicios (El servicio de database)
                        $ docker compose build
                    + Crear y poner en marcha contenedores (Modo detach)
                        $ docker compose up -d
                    + Ver la salida de los contenedores (Logs)
                        $ docker compose logs
                    + Detener y eliminar contenedores y redes
                        $ docker compose down

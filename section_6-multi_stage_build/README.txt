MULTI-STAGE BUILD

* Docker
    - Apps
        + Cron-Ticker
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
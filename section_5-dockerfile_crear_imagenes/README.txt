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
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
            
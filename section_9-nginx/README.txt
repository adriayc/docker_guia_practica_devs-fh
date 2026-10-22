NGINX
 
 * Docker
    - Apps
        + React Heroes (ReactJS)
            * Inicializar la app
                - Copiar o clonar la app
                    $ yarn install
                    $ yarn dev
                    $ yarn build
            * Tareas:
                - Inicio del proyecto
                    + Copiar o clonar la app.
                    + Levantar la app con: `yarn install` y `yarn dev`.
                    + Abrir en el browser la url `http://localhost:3000/`
                    + Crear la compilación de producción `yarn build`.
                - Nginx (Docker Hub)
                    + Descargar y ejecutar la imagen.
                        $ docker run --name some-nginx -d -p 8080:80 nginx:1.31.7
                    + Abrir en browser la url: `http:localhost:8080`
                - Inspeccionar nginx
                    + Listar los contenedores
                        $ docker container ls
                    + Ejecuta un comando dentro de un contenedor en funcionamiento (Abre un terminal interactiva)
                        $ docker container exec -it 5df91096568c bash
                            Ruta del contenido estatico
                            > # cd usr/share/nginx/html/
                            > # ls 
                                ...  index.html
                            > cat index.html

                            Archivo de configuración del server
                            > # cd /etc/nginx/conf.d
                            > # ls
                                default.conf
                            > cat default.conf
                    + Listar los contenedores
                        $ docker container ls
                    + Eliminar el contenedor
                        $ docker container rm -f 5df91096568c
                - Construir la imagen de nuestra aplicación
                    * Crear el archivo Dockerfile y .dockerignore
                    * Construir la image
                        $ docker image build -t heroes-app . --no-cache
                    * Listar imagenes
                        $ docker image ls
                    * Ejecutar el contenedor
                        $ docker container run -p 80:80 heroes-app
                    * Abrir el browser URL: http://localhost/
                    * Eliminar el contenedor
                        $ docker container rm -f 39b046d29e22
                - Nginx configuración
                    * Copiar el archivo de config de nginx `/etc/nginx/conf.d/default.conf` en el directorio `nginx` del proyecto.
                    * Realizar las modificaciones del archivo de configuración.
                    * Construir la imagen
                        $ docker image build -t heroes-app . --no-cache
                    * Ejecutar el contenedor
                        $ docker container run -p 80:80 heroes-app
                    * Abrir el browser URL: http://localhost/
                - Copiar los recursos estáticos
                    * Modificar el `Dockerfile`
                    * Construir la imagen
                        $ docker image build -t heroes-app .
                    * Ejecutar el contenedor
                        $ docker container run -p 80:80 heroes-app
                    * Abrir el browser URL: http://localhost/

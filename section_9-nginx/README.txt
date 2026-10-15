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
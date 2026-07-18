BASES DE DOCKER


* Commandos (Docker)
    - Descarga una imagen de contenedor desde un registro remoto (Docker Hub)
        $ docker pull hello-world
    - Crea y arranca un nuevo contenedor a partir de una imagen
        $ docker container run hello-world
        $ docker run hello-world
    - Listar contenedores
        $ docker container ls
        $ docker container ls -a                    // Listar tanto los activos y inactivos
        $ docker ps
    - Eliminar contenedores
        $ docker container rm ae5cc9d7a145          // Por CONTEINER_ID
        $ docker container rm stoic_rosalind        // Por NAMES
        $ docker container prune                    // Todos los contenedores detenidos
    - Elimar imagenes 
        $ docker image rm 5c855ad7b85e              // Por ID
        $ docker image rm hello-world:latest        // Por IMAGE
        $ docker image pruna                        // Todas las imagenes no utilizadas

    - Crear y arrancar un contenedor
        $ docker run -d -p 80:80 docker/getting-started             // Abrir el URL: http://localhost/ en el browser
        $ docker run -dp 80:80 docker/getting-started
            > -d - ejecutar en modo detached o independiente (en segundo plano)
            > -p 80:80 - mapea el puerto 80 del host al pueto 80 del contenedor
            > docker/getting-started - la imagen a utilizar
    - Detener un contenedor en ejecución
        $ docker container stop 44b1c8537918
    - Iniciar un contenedor detenido
        $ docker container start 44b1c8537918
    - Eliminar forzada de un contenedor en ejecución
        $ docker container rm -f 44b1c8537918
    - Eliminar una imagen
        $ docker image rm d79336f4812b

* Docker Desktop
    - Search IMAGE (Click 'Search' o CTRL + K)
        > Search: ... hello-world
            hello-world                 [Pull]  |  [Run]
    - Lista de imagenes (Click 'Images')
        Name            Tag                     Actions
        hello-world     latest                  [RUN] | [Delete]
            > Run a new container
                Click 'Run'
    - Lista de contenedores (Click 'Containers')
        Name            Container ID    Images                  Actions
        kind_mcleren    5f697a16e2f5    hello-world             [Play] | [Delete]
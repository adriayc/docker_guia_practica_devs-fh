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

    - Descargar una image (Postgres)
        $ docker pull postgres              // Tag: latest (La última versión)
    - Crear y arrancar el contenedor
        $ docker container run --name some-postgres -e POSTGRES_PASSWORD=postgres123 -p 5432:5432 -d postgres           // Personalizar el nombre, variables de entorno y exponer los puertos
    - Eliminar un contenedor
        $ docker container rm -f 2b34dd5cac25           // Elimina contedor en ejecución (De manera forzada)
    - Crear y arrancar el contenedor
        $ docker container run \
          > --name postgres-one \
          > -e POSTGRES_PASSWORD=mypass1 \
          > -p 5432:5432 \
          > -d postgres

        $ docker container run \
          > --name postgres-two \
          > -e POSTGRES_PASSWORD=mypass2 \
          > -p 5433:5432 \
          > -d postgres:18.4-alpine3.24
    - Listar los contenedores en ejecución
        $ docker container ls
    - Eliminar los contendores
        $ docker container rm -f e0924757c000 e0924757c000
    - Listar todas las imagenes
        $ docker image ls -a
    - Elinar todos los imagenes de Postgres
        $ docker image rm 9a8afca54e78 32ca0af8e77b

    - Descar una image (MariaDB Server)
        $ docker pull mariadb:lts-ubi
    - Crear y arrancar el contenedor
        $ docker container run \
          > --name some-mariadb \
          > -p 3306:3306 \
          > -e MARIADB_RANDOM_ROOT_PASSWORD=1 \
          > -d mariadb:lts-ubi
    - Listar los contenedores activos
        $ docker container ls
    - Obtener los logs del contenedor
        $ docker container logs 96c9f2342387
        $ docker container logs --follow 96c9f2342387
            > Search: 'GENERATED ROOT PASSWORD: {{RANDOM_PASS_VALUE}}'
    - Eliminar el contenedor
        $ docker container rm -f 96c9f2342387

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

* TablePlus
    - Create a new connection Postges (Click '+' > 'New Connection')
        > Connection's name: postgres-docker
        > PostgreSQL
        > Database host/socket: localhost           Port: 5432
        > Database's user: postgres                 Password: postgres123
        > Database's name:
        Click 'Text' | 'Save' | 'Connect'

    - Create a new connection MariaDB (Click '+' | 'New Connection')
        > Connection's name: mariadb-docker
        > MariaDB
        > Database host/socket: 127.0.0.1           Port: 3306
        > Database's user: root                    Password: {{PASS_GENERATED_VALUE}}
        > Database's name:
        Click 'Text' | 'Save' | 'Connect'
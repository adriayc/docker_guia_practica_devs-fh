VOLÚMENES Y REDES

* Docker
    - Comandos
        + Descargar la image de MariaDB
            $ docker pull mariadb:lts-ubi
        + Crear y ejecutar el contenedor (Sin persistencia de la data)
            $ docker container run --detach \
              > --name world-db \
              > -p 3306:3306 \
              > --env MARIADB_USER=adrian \
              > --env MARIADB_PASSWORD=adrian123 \
              > --env MARIADB_ROOT_PASSWORD=root123 \
              > --env MARIADB_DATABASE=world-db \
              > mariadb:lts-ubi
        + Listar contenedores en ejecución
            $ docker container ls
        + Eliminar el contenedor
            $ docker container rm -f ef2ef0fc681d

        + Crear un volumen
            $ docker volume create world-db                     # Crear un espacio en el host (persistencia de la data)
        + Listar volumenes
            $ docker volume ls
        + Mostar la información detallada del volumen
            $ docker volume inspect world-db
        + Crear y ejecutar el contenedor (Con persistencia de la data)
            $ docker container run --detach \
            > --name world-db \
            > -p 3306:3306 \
            > --env MARIADB_USER=adrian \
            > --env MARIADB_PASSWORD=adrian123 \
            > --env MARIADB_ROOT_PASSWORD=root123 \
            > --env MARIADB_DATABASE=world-db \
            > --volume world-db:/var/lib/mysql \
            > mariadb:lts-ubi
        + Listar contenedores en ejecución
            $ docker container ls
        + Eliminar el contenedor 
            $ docker container rm -f 58b2cadbac2c
        + Crear y ejecutar nuevamente el contenedor
            $ docker container run --detach \
            > --name world-db \
            > -p 3306:3306 \
            > --env MARIADB_USER=adrian \
            > --env MARIADB_PASSWORD=adrian123 \
            > --env MARIADB_ROOT_PASSWORD=root123 \
            > --env MARIADB_DATABASE=world-db \
            > --volume world-db:/var/lib/mysql \
            > mariadb:lts-ubi
        
        + Crear y ejecutar el contenedor PHPMyAdmin (Usage with arbitrary server)
            $ docker container run \
            > --name phpmyadmin \
            > -d \ 
            > -e PMA_ARBITRARY=1 \
            > -p 8080:80 \
            > phpmyadmin:5.2.3-apache
            NOTA: Abre la URL: http://localhost:8080/ en el browser

        * Crear una red
            $ docker network create world-app
        * Listar redes
            $ docker network ls
        * Eliminar todas las redes no utilizadas
            $ docker network prune 
        * Conectar uno o más contenedor/es a una red
            $ docker network connect world-app 9875110ecea1             # Conectar a la red el contenedor de MariaDB
            $ docker network connect world-app 9f389e299689             # Conectar a la red el contenedor de PhpMyAdmin
        * Muestra la información detallada de las redes
            $ docker network inspect world-app

        * Listar los contenedores
            $ docker container ls
        * Eliminar los contenedores de MariaDb y PhpMyAdmin
            $ docker container rm -f 9f389e299689 9875110ecea1
        * Listar las redes
            $ docker network ls
        * Crear y ejectuar el contenedor de MariaDB
            $ docker container run --detach \
            > --name world-db \
            > -p 3306:3306 \
            > --env MARIADB_USER=adrian \
            > --env MARIADB_PASSWORD=adrian123 \
            > --env MARIADB_ROOT_PASSWORD=root123 \
            > --env MARIADB_DATABASE=world-db \
            > --volume world-db:/var/lib/mysql \
            > --network world-app \
            > mariadb:lts-ubi
        * Crear y ejectuar el contenedor de PhpMyAdmin
            $ docker container run \
            > --name phpmyadmin \
            > -d \ 
            > -e PMA_ARBITRARY=1 \
            > -p 8080:80 \
            > --network world-app \
            > phpmyadmin:5.2.3-apache
            NOTA: Abre la URL: http://localhost:8080/ en el browser
        * Listar los contenedores
            $ docker container ls
        * Elinar los conenedores
            $ docker container rm -f f95cef646a7a 6fc34e49d559
        * Listar los volumenes
            $ docker volume ls
        * Eliminar los volumenes
            $ docker volume rm world-db
        * Listar las redes
            $ docker network ls
        * Eliminar las redes
            $ docker network rm world-app
        
        Bind Volumes - vincular un directorio o archivo de tu máquina host directamente a un contenedor (debes especificar la ruta absoluta del host seguida de la ruta interna del contenedor).
        * Ir a directorio de app de NestJS
            $ cd {{DIR_NAME}}/nest-graphql
        * Crear y arrancar el contenedor
            $ docker container run \
            --name nest-app \
            -w /app \
            -p 3000:3000
            -v "$(pwd):/app" \                          // Bind volume
            node:18-alpine3.21 \                        // NOTA: Versión compatible con el node engines de la app de NestJS
            sh -c "yarn install && yarn start:dev"      // Levanta un shell interna (Ejecuta comandos de NestJS)
            NOTA: Abre la URL: http://localhost:3000/graphql en el browser
        * Listar contenedores
            $ docker container ls
        * Eliminar el contenedor
            $ docke container rm -f bab0bfb6a53d

        * Ir a directorio de app de NestJS
            $ cd {{DIR_NAME}}/nest-graphql
        * Crear y arrancar el contenedor
            $ docker container run -d \
            --name nest-app \
            -w /app \
            -p 3000:3000
            -v "$(pwd)":/app \                          // Bind volume
            node:24.18.0-alpine3.23 \
            sh -c "yarn install && yarn start:dev"      // Levanta un shell interna (Ejecuta comandos de NestJS)
            TASK: Realizar cambios en la app de NestJS y probar el Bind Volume!!!
            NOTA: Abre la URL: http://localhost:3000/graphql en el browser
        * Listar contenedores
            $ docker container ls
        * Obtener los registros de un contenedor (Logs)
            $ docker container logs -f e49b0385e0c6         // -f - sigue la salida del registro

* TablePlus
    - Crear conexion a MariaDB (Click '+' | 'New Connection')
        > Connection's name: WorldDB
        > MariaDB
        > Database host/socket: 127.0.0.1       Port: 3306
        > Database's user: adrian               Password: arian123
        > Database's name: world-db
        Click 'Test' | 'Save' | 'Connect'
    - Ejecutar un consulta SQL (Click 'New SQL query' o CTRL + T)
        > Crear o pegar la consulta SQL                             # NOTA: Seleccionar una sección o toda y ejecutar la consulta SQL
        Click 'Run Current' o CTRL + Enter

* PhpMyAdmin
    - Connetar a la Base de Datos (Abri la URL: http://localhost:8080/ en el navegador)
        > Server: world-db          # NOTA: Copiar el valor del NAME del contenedor de la Base de Datos (Es el Host o Server) que se muestra al inspeccionar la red  
        > User: adrian
        > Password: adrian123
        Click 'Log in'

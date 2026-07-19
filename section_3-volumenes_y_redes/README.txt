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
        > Server: 127.0.0.1
        > User: adrian
        > Password: adrian123
        Click 'Log in'
        NOTA: Connection refused!!! 

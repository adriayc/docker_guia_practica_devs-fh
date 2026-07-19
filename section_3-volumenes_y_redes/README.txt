VOLÚMENES Y REDES

* Docker
    - Comandos
        + Descargar la image de MariaDB
            $ docker pull mariadb:lts-ubi
        + Crear y ejecutar el contenedor
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
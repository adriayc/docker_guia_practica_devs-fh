DOCKER COMPOSE (MULTI-CONTAINER APPS)

* Docker
    - Comandos
        + Postgres + pgAdmin
            * Crear el volumen
                $ docker volume create postgres-db
            * Listar volumenes
                $ docker volume ls
            * Crear y ejecutar el contenedor (Postgres)
                $ docker container run -d \
                --name postgres-db \
                -e POSTGRES_PASSWORD=postgres123 \
                -v postgres-db:/var/lib/postgresql/data \
                postgres:17.10
            * crear y ejecutar el contenedor (pgAdmin)
                $ docker container run -d \
                --name pgAdmin \
                -e PGADMIN_DEFAULT_EMAIL=pgadmin@mail.com \
                -e PGADMIN_DEFAULT_PASSWORD=pgadmin123 \
                -p 8080:80 \
                dpage/pgadmin4:9.15.0
                NOTA: Abrir la URL: http://localhost:8080/ en el browser
            * Listar contenedores
                $ docker container ls
            * Crear la red
                $ docker network create postgres-net
            * Listar redes
                $ docker network ls
            * Listar contenedores
                $ docker container ls
            * Conectar los contenedores (Postgres & pgAdmin) a la red
                $ docker network connect 80af833bc030 17c186667e54
                $ docker network connect 80af833bc030 7f60707af210
            * Eliminar contenedores
                $ docker container rm -f 17c186667e54 7f60707af210

* Docker Compose
    - Comandos
        + Postgres + pgAdmin
            * Crear el archivo `docker-compose.yml` con los servicios.
            * Navegar la ruta del archivo `docker-compose.yml`.
                $ cd PATH/postgres-pgadmin
            * Crear y poner en marcha los contenedores
                $ docker compose up
            * Abrir la URL: http://localhost:8080/ en el browser (Probar pgAdmin)
            * Listar redes
                $ docker volume ls

* pgAdmin (URL: http://localhost:8080/)
    * Login
        > Email Address/Username: pgadmin@mail.com
        > Password: pgadmin123
        Click 'Login'
    * Add new Server (Click 'Add New Server')
        General
            > Name: SuperHeroesDB
        Connection
            > Host name/address: {{CONTAINER_NAME_POSTGRES}}
            > Port: 5432
            > Maintenance database: postgres
            > Username: postgres
            > Password: postgres123
            > Save password? [TRUE]
        Click 'Save'
    * Create new Database (Click RIGHT > Create > 'Database...' o Alt + Shift + N)
        > Database: HeroesDB
        Click 'Save'
    * Create new Table (Select 'HeoresDB' > Schemas > pubilc > Tables > Click RIGHT > Create > Table... o Alt + Shift + N)
        General
            > Name: Heroes
        Columns
            - Add row (Click '+')
                > Name      Data type           ... Primary key?
                  id        integer                 [TRUE]
            - Add row (Click '+')
                > Name      Data type           ... Primary key?
                  name      character varying
        Click 'Save'
    * Add Row (Select 'Hereos' table > Click 'All Rows' o ALT + SHIFT + v > Click '+')
        > Name: Superman
        Click 'Save Data Changes' o F6
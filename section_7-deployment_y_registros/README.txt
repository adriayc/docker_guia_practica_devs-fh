DEPLOYMENTS Y REGISTROS

* Docker
    - Apps
        + Teslo-Shop (Nestjs)
            * Tareas:
                - Construcción de image para multiples arquitecturas
                    + Crear un nuevo repositorio en Docker Hub.
                        > Respository Name: teslo-shop
                        > Short description: Teslo-Shop API on NestJS
                        > [TRUE] Public
                        Click 'Create'
                    + Listar las intefaces builder
                        $ docker buildx ls
                    + Crear una nueva instancia personalizada de builder
                        $ docker buildx create \
                        --name my-builder \
                        --driver docker-container \
                        --bootstrap --use
                    + Establecer la instancia actual del builder
                        $ docker buildx use my-builder
                    + Iniciar una construcción y subir a Hub
                        $ docker buildx build \
                        --platform=linux/amd64,linux/arm64,linux/arm/v7 \
                        -t adriayc/teslo-shop:1.0.0 \
                        --push .
                        $ docker buildx build \
                        --platform=linux/amd64,linux/arm64,linux/arm/v7 \
                        -t adriayc/teslo-shop:latest \
                        --push .
                - Actualizar la descripción general del repositorio       
                    + Actualizar la respostory overview (My respository > General > Repository overview | Click 'Edit')
                        ## Variables de entornos de la applicación
                        | Variables de entorno     | Ejemplo                   | Descripción       |
                        | :---                     | :---                      | :---              |
                        | APP_VERSION              | 1.0.1                     | Versión de la app |
                        | ...                      | ...                       | ...               |
                - Prueba de la image del Hub
                    + Eliminar todas las imagenes
                        $ docker compose prune -a
                    + Listar imagenes
                        $ docker image ls
                    + Navegar a la PATH de `teslo-shop-test`
                    + Construir o reconstruir servicios
                        $ docker compose build
                    + Crear y poner en marcha contenedores
                        $ docker compose up
                    + Detener y eliminar contenedores y redes, y volumnes
                        $ docker compose down -v
                - Aprovisionamiento de la Database
                    + Plataformas de cloud
                        > AWS
                        > Azure
                        > Google Cloud
                        Otros:
                        > Digital Ocean
                        > Railway
                    + Digital Ocean
                        * Sign up/Log in.
                        * Crear un nuevo projecto.
                            - Create new project
                                > Name your project: tesloShopApp
                                > Add enviroment type: Development
                                > Tell us what it's for*: Class project / Educational purposes                    
                                > Add a description: {{ENTER_DESCRIPTION}}
                                Click 'Create Project'
                            - Move resources into TesloShopApp
                                Click 'Skip for now'
                            - Crear la Database (DATA SERVICES | Managed Databases > PostgreSQL | Click 'Create')
                                + Create Database Cluster
                                    > Choose a database engine: PostgreSQL
                                    ...
                                    > Choose a unique database cluster name*: tesloshopdb
                                    > Select a project: TesloShopApp
                                    Click 'Create Database Cluster'
                                + Restringir la conexión entrante (Overview > Add trusted sources)
                                    > Search for sources: {{_}}
                                    Click 'Continue without security Clouster'
                                + Connection details
                                    Connection to this database cluster
                                        > username = doadmin
                                        ...
                                        Click 'Continue'
                                + Next steps
                                    > A few things to help set up this database cluster
                                    Click 'Great, I'm done'
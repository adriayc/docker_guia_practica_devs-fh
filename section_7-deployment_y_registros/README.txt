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

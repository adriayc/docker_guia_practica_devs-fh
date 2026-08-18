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
                - Probar la database
                    + Configurar los users y databases (DATA SERVICES | Managed Databases > Seleccionar 'tesloshopdb' > Users & Databases)
                        > Users
                            > Username: tesloshop-user
                            Click 'Save'
                        > Databases
                            > Database Name: tesloshopdb
                            Click 'Save'
                    + Ver las credenciales (DATA SERVICES | Managed Databases > Seleccionar 'tesloshopdb' > Overview)
                        > CONNECTION DETAILS
                            > Connection String | Connection parameters
                                > User: tesloshop-user
                                > Database/Pool: tesloshopdb
                    + TablePlus
                        * Crear una nueva conexión (Click '+' | Create new connectin > PostgreSQL)
                            > PostgreSQL Connection
                                > Name: TesloShopDB-DO
                                > Host/Socket: {{PG_HOST_DO}}
                                > Port: {{PG_PORT_DO}}
                                > User: {{PG_USERNAME_DO}}
                                > Passoword: {{PG_PASSWORD_DO}}
                                > Database: {{PG_DATABASE_DO}}
                                Click 'Test' | 'Save' | 'Connect'
                - Conectar contenedore con la database (Digital Ocean)
                    + Listar los contenedores
                        $ docker container ls -a
                    + Eliminar contenedores
                        $ docker container rm -f 0845ff389362 0945df389538
                    + Ir al PATH de al app `teslo-shop-test`.
                    + Actualizar las credencial de las variables de entorno `.env` con las de Digital Ocean.
                    + Crear y poner en marcha contenedores
                        $ docker compose up
                    + NOTA: crear una nueva imagen con los SSL del proyecto `teslo-shop` y subir al Hub.
                - Conectar contenedores a la database
                    + Ir al PATH de la app `teslo-shop`
                    + Descomentamos la configuración del SSL en el archivo `app.module.ts`
                    + Iniciar una construcción y subir a Hub
                        $ docker buildx build \
                        --platform=linux/amd64,linux/arm64,linux/arm/v7 \
                        -t adriayc/teslo-shop:1.1.0 \
                        --push .
                        $ docker buildx build \
                        --platform=linux/amd64,linux/arm64,linux/arm/v7 \
                        -t adriayc/teslo-shop \
                        --push .
                    + Ir al PATH de la app `teslo-shop-test`
                    + Detener y eliminar contenedores y redes
                        $ docker compose down
                    + Crear y poner en marcha contenedores
                        $ docker compose up
                    + Verificar el funcionamiento de la app (URL: http://localhost:3000/api) y ejecutar el SEED
                    + Detener y eliminar contenedores y redes
                        $ docker compose down
                - Desplegar una imagen desde Docker Hub
                    + Crear un nueva app (Apps > Click 'Create App')
                        1 Resources
                            > Crear Resources From Source Code
                                > Service Provide: Docker Hub       // NOTA: debe rese un registro publico!!!
                                > Repository: adriayc/teslo-shop
                                > Tag (optional): 1.1.0
                                Click 'Next'
                            > App
                                > Editar la app
                                    > adriayc-teslo-shop Settings
                                        > Name (Click 'Edit')
                                            > Resource Name: tesloshop-api
                                            Click 'Save'
                                    Click 'Back'
                                Click 'Next'
                        2 Enviroment Variables
                            > Enviroment
                                > Global (Click 'Edit')
                                    Keys                Values
                                    APP_VERSION         1.1.0
                                    STAGE               prod
                                    ...                 ...
                                    Click 'Save'
                                Click 'Next'
                            > Info
                                > App Info (Click 'Edit')
                                    > Name: tesloshop-api
                                > Project: TesloShopApp
                                Click 'Save'
                            Click 'Next'
                        3 Info
                            ...
                            > Billing (Click 'Edit Plan')

                                > Edit Plan
                                    > Plan: Basic
                                    > Web Service 
                                        Resource        Size
                                        tesloshop-api   {{SELECT_CHEAPEST_PLAN}}
                                Click 'Back'
                            Click 'Create Resources'
                    + Ver los logs mientras realiza el deploy (MY_APP > Click 'Go to Deploy Logs')
                    + Verificar la app (MY_APP > Click 'Live App')
                        > URL: https://teslo....ondigitalocean.app/api
                - Crear registro y desplegarlo en Digital Ocean
                    + Crear un nuevo registro (Container Registry > Click 'Create a Container Registry')
                        > Create your private container registry
                            > All we nned is a name
                                > Enter a unique name: ax2cdev-registry
                            > Choose a datacenter region: {{SELECT_DATACENTER_REGION}}
                            > Choose a plan: Starter
                            Click 'Create Resgistry'
                        1 Create a container registry
                            Click 'Get Started'
                        2 Connection to the registry
                            > Authenticate with this registry
                                > API Token (dependency free)
                                    First, ```create a new API token```...
                                        > Application & API (Token/Keys > Click 'Generate New Token')
                                            > New personal access token
                                                > Token name: ax2cdev-token
                                                > Expiration: 30 days
                                            Click 'Generate Token'
                                        > COPY ax2cdev-token token!!!
                                    $ docker login registry.digitalocean.com    [COPY]
                                        > Username: {{API_TOKEN}}
                                        > Password: {{API_TOKEN}}
                            Click 'Continue'
                        3 Integrating with Kubernates
                            Click 'Save & Continue'
                        4 Next steps
                            Click 'Great, I'm done'
                - Subir imagen al registro de Digital Ocean
                    + Ir al PATH de la app `teslo-shop`
                    + Iniciar una construcción y subir a DO
                        $ docker buildx build \
                        --platform=linux/amd64,linux/arm64,linux/arm/v7 \
                        -t registry.digitalocean.com/ax2cdev-registry/teslo-shop:1.2.0 \
                        --push .
                - Desplegar imagen del registro privado de Digital Ocean
                    + Crear una nueva app (Apps > Click 'Create App')
                        1 Resources
                            > Create Resource From Source Code
                                > Service Provider: DigitalOcean Container Registry
                                > Repository: ax2cdev-registry/teslo-shop
                                > Tag: 1.2.0                                // NOTA: no usar el tag `latest`!!!
                                > [TRUE] Autodeploy
                                Click 'Next'
                            > App
                                > Edit the app name (optional) y Edit Plan (select a plan)
                                Click 'Next'
                        2 Enviroment Variables
                            > Enviroment
                                > Global (Add all enviroment variables)
                            Click 'Next'
                        3 Info
                            > Info
                                > App Info (Click 'Edit' | Update name & Select Project)
                            Click 'Next'
                        4 Review
                            Click 'Create Resources'
                    + Ver los logs mientras realiza el deploy (MY_APP > Click 'Go to Deploy Logs')
                    + Verificar la app (MY_APP > Click 'Live App')
                        > URL: https://teslo....ondigitalocean.app/api

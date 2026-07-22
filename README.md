# DOCKER - GUÍA PRÁCTICA DE USO PARA DESARROLLADORES

## Instalaciones necesarias

- [Node.js](https://nodejs.org/es)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Google Chrome](https://www.google.com/chrome/)
- [Postman](https://www.postman.com/)
- [Git](https://git-scm.com/)

```sh
$ git config --global user.name "Your name"
$ git config --global user.email "Your email"
```

- [Docker Desktop](https://docs.docker.com/desktop/)
- [Table Plus](https://tableplus.com/)

Extensiones de VSCode

- NGINX Configuration
- Activitus Bar

Extensiones de Chrome

- JSON Viewer Pro

Temas y Iconos de VSCode

- Aura Theme
- Material Icon Theme

## Docker

Docker es una plataforma que permite crear, ejecutar y distribuir apliaciones dentro de contenedores. Un contenedor es un entorno aislado que incluye todo lo necesario para que una aplicación funcione: el código, las dependencias, las bibliotecas, las variables de entorno y la configuración.

**¿Por qué deberías aprender Docker?**

Si eres desarrollador, especialmente de NestJS, Node.js, Java, PHP o trabajas con bases de datos, Docker es prácticamente una habilidad fundamental.

1. Todos usan el mismo entorno.
2. Facilita el desarrollo.
3. Funciona igual en cualquier sistema operativo.
4. Dacilta el despliegue.
5. Aísla aplicaciones.
6. Es un estándar de la industria.

### Docker Hub

Docker Hub es el registro (container registry) oficial de Docker, donde se almacena, comparten y distribuyen imágenes de Docker.

### Imagen

Una imagen (Docker Image) es un archivo de solo lectura (read-only) que contiene todo lo necesario para ejecutar una aplicación dentro de un contenedor

Una Imagen no está en ejecución. Es simplemente una plantilla a partir de la cual Docker crea uno o más contenedores.

### Container

Un contenedor (Container) es una instancia en ejecución de una imagen de Docker. Es un entorno aislado donde se ejecuta una aplicación junto con todas sus dependencias, configuraciones y archivos necesarios.

### Docker Daemon

El Docker Daemon (también llamdo dockerd) es un servicio principal de Docker. Se ejecuta en segundo plano y es el encargado de gestionar todos los recursos de Docker en el sistema.

### Docker Desktop

Docker Desktop es una aplicación que proporciona un entorno completo para desarrollar, ejecutar y administrar contenedores Docker en Windows y macOS. Incluye el motor de Docker (Docker Engine), herramientas de línea de comandos y una interfaz gráfica para facilitar el trabajo con contenedores.

En Linux, normalmente se instala directamente Docker Engine, por lo que Docker Desktop es opcional.

### Alpine Linux

Alpine Linux es una distribución de Linux muy ligera, segura y optimizada, diseñada para consumir pocos recursos. En Docker, se utiliza como imagen base para crear contenedores pequeños y rápidos.

### Docker Volume

Un Volumen (Docker Volume) es un mecanismo que permite almacenar datos de forma persistente, incluso si un contenedor se detiene, se elimina o se vuelve a crear.

Por defecto, los datos que genera un contenedor se almacenan dentro de él. Si eliminas el contenedor, esos datos también se eliminan. Los volúmenes solucionan este problema guardando la información fuera del ciclo de la vida del contenedor.

#### Tipos de almacenamiento en Docker

Docker ofrece tres formas principales de almacenar datos en los contenedores:

1. **Docker Volumes (Volúmenes adminstrados por Docker)**

   Los Docker Volumes son el tipo de almacenamiento recomendado por Docker para datos persistentes.

2. **Bind Mounts (Montajes de directorios del host)**

   Los Bind Mounts conectan directamente una carpeta del sistema operativo con una carpeta dentro del contenedor.

3. **tmpfs Mounts (Montajes en memoria RAM)**

   Los tmpfs Mounts almacenan datos únicamente en la memoria RAM.

### Container Network

Una Container Network (o red de contenedores) es un mecanismo de Docker que permite que los contenedores se comuniquen entre sí y con el mundo exterior.

Sin un red, los contenedores estarían completamente aislados y no podrían intercambiar información.

### Commandos

- Descargar una imagen desde el registro oficial:

```sh
$ docker pull IMAGEN_NAME
$ docker pull IMAGEN_NAME:TAG       # Versión específica
```

- Listar imagenes

```sh
$ docker image ls
$ docker image ls -a        # Incluyendo las intermedias
$ docker image ls -q        # Mostrar solo los ID de las imágenes
$ docker images             # Otra forma de listar imagenes (El comando clásico)
```

- Muesta el menú de ayuda para las imagenes

```sh
$ docker image --help
```

- Eliminar imagenes

```sh
$ docker image rm [ID | IMAGE]
$ docker rmi -f $(docker images -a -q)      # Eliminar todas las images (Primero listar solo los ID de las imagenes)

$ docker image pruna                        # Elimina imágenes no utilizadas
```

- Ejecutar una image y crear un contenedor:

```sh
$ docker container run IMAGE_NAME
$ docker run IMAGE_NAME

$ docker run -d -p 80:80 IMAGE_NAME
$ docker run -dp 80:80 IMAGE_NAME
# -d - modo detached (En segundo plano)
# -p - publicar los puertos (mapea el puerto 80 del host con el 80 del contenedor)

$ docker container run --name CONTAINER-NAME -e VAR_NAME=value -p PORT:PORT -d IMAGE_NAME
# --name - nombre del contenedor
# -e - variable de entorno (CLAVE=valor)
# -p - publicar los puertos

$ docker container run \
> --name CONTAINER-NAME \
> -e VAR_NAME=value \
> -p PORT:PORT \
> -d IMAGE_NAME

# Usando volume (Persistencia de data)
$ docker container run --detach \
> --name CONTAINER-NAME \
> -p PORT_HOST:PORT_CONTAINER \
> --env VAR_NAME=VALUE \
> --volume VOLUME-NAME:DATA_FILES_CONTAINER \            # Volúmenes nombrados o Docker Volumes
> IMAGE_NAME
# -v - enlazar un volumen (Compartir archivos entre tu host y el contenedor)

# Redes de contenedores
$ docker container run --detach \
> --name CONTAINER-NAME \
> -p PORT_HOST:PORT_CONTAINER \
> --env VAR_NAME=VALUE \
> --volume VOLUME-NAME:DATA_FILES_CONTAINER \
> --network [NETWORK_ID | NAME]
> IMAGE_NAME
# -n - Conectar una red al contenedor

# Bind volume
$ docker container run \
--name CONTAINER-NAME \
-w /app \
-p PORT_HOST:PORT_CONTAINER
-v "ABSOLUTE_PATH_HOST:ABSOLUTE_PATH_CONTAINER" \           # Bind volume (E.g. -v /home/adriano/nest-app:/app)
IMAGE_NAME:TAG \
sh -c "COMMAND1 && COMMAND2"
# -w - Directorio de trabajo dentro del contenedor
# sh -c - Levanta una shell interna para ejecutar comandos
```

- Listar contenedores

```sh
$ docker container ls
$ docker container ls -a        # Activos y detenidos
$ docker container ls -q        # Ver solo los ID de los contenedores (útil para scripts)
$ docker ps                     # Otra forma de listar contenedores (El comando clásico)
```

- Muestra el menú de ayuda para contenedores

```sh
$ docker container --help
```

- Detener un contenedor en ejecución

```sh
$ docker container stop [CONTAINER_ID | NAMES]
```

- Iniciar un contenedor detenido

```sh
$ docker container start [CONTAINER_ID | NAMES]
```

- Ejecutar un comando de un contenedor en ejecución

```sh
$ docker container exec -it [CONTAINER_ID | NAMES] EXECUTABLE        # -it - interative terminal
# -i - Mantén STDIN abierto aunque no esté conectado
# -t - Asignar un pseudo-TTY
$ docker container exec -it [CONTAINER_ID | NAMES] bash
$ docker container exec -it [CONTAINER_ID | NAMES] /bin/sh
```

- Obtener los logs de un contenedor

```sh
$ docker container logs [CONTAINER_ID | NAMES]
$ docker container logs -f [CONTAINER_ID | NAMES]       # Seguir la salida del log (En tiempo real)

```

- Eliminar contenedores

```sh
$ docker container rm [CONTAINER_ID | NAMES]
$ docker container rm -f [CONTAINER_ID | NAMES]     # Fueza la eliminacion de un contenedor en ejecución
$ docker container rm -f $(docker ps -a -q)         # Eliminar todos los contenedores (Primero lista solo los ID de los contenedores)
$ docker container rm -f [CONTAINER_ID | NAMES] [CONTAINER_ID | NAMES]         # Eliminar varios contenedores en ejecución

$ docker container prune                            # Elimina todos los contenedores detenidos
```

- Crear un volumen

```sh
$ docker volume create VOLUME_NAME
```

- Lista volumnes

```sh
$ docker volume ls
```

- Mostrar información detallada del volumen

```sh
$ docker volume inspect [VOLUME_NAME]
```

- Eliminar un volumen

```sh
$ docker volume rm [VOLUME_NAME]
```

- Crear un red

```sh
$ docker network create NETWORK_NAME
```

- Listar redes

```sh
$ docker network ls
```

- Conectar un contenedor a un red

```sh
$ docker network connect [NETWORK_ID | NAME] [CONTAINER_ID | NAMES]
```

- Mostrar información detallada de un red

```sh
$ docker network inspect [NETWORK_ID | NAME]
```

- Elimina todas las redes no utilizadas

```sh
$ docker network prune
```

- Eliminar un red

```sh
$ docker network rm [NETWORK_ID | NAME]
```

## Docker Compose

Docker Compose es una herramienta de Docker que permite definir, configurar y ejecutar apliacaciones compuestas por múltiples contenedores utilizando un único archivo de configuración llamado `compose.yaml` (o `docker-compose.yml` en proyectos antiguos).

En lugar de ejecutar cada contenedor manulmente con varios compandos `docker run`, Docker Compose te permite describir toda la apliación en un solo archivo y levantarla con un único comando.

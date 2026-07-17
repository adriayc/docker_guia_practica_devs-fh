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
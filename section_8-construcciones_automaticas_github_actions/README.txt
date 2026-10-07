CONSTRUCIONES AUTOMÁTICAS - GITHUB ACTIONS

* Docker
    - Apps
        + Graphql-Actions (Nestjs)
            * Inicializar la app
                - Copir o clonar la app
                    $ yarn install
                    $ yarn start:dev
            * Tareas:
                - Inicio del proyecto
                    + Copiar o clonar la app.
                    + Levantar la app con: `yarn install` y `yarn start:dev`.
                    + Abrir en el browser la url `http://localhost:3000/graphql`
                    + Bajar la app y borrar los `node_modules` y `dist`.
                - Crear un repositorio en GitHub
                    + Crear un nuevo repositorio
                        > Create a new repository
                            > Repository name: docker-graphql-actions
                            > [TRUE] Public
                            Click 'Create repository'
                    + Subir el repositorio a GitHub
                        $ git init
                        $ git add .
                        $ git commit -m "Fisrt commit"

                        $ git remote add origing https://github.com/.../{{REPOSITORY_NAME}}.git
                        $ git branch -M main
                        $ git push -u oring main
                - Configurar las credenciales (GitHub Secrets)
                    + Docker Hub
                        * Generate new access token on «Docker Hub» (Docker Hub > Account settings > Personal access tokens > 'Generate new token')
                            > Access token description: GitHub Actions
                            > Access permissions: Repo Read & Write
                            Click 'Generate'
                        * COPY the personal access token!!!
                    + GitHub
                        * Repository secrets ({{REPOSITORY_NAME}} > Settings > Secrets and variables > Actions > 'New repositorio secret')
                            - Username
                                > Name: DOCKER_HUB_USERNAME
                                > Secret: {{USERNAME}}
                                Click 'Add secret'
                            - Password
                                > Name: DOCKER_HUB_PASSWORD
                                > Secret: {{PASSWORD}}
                                Click 'Add secret'
                    + Docker Hub
                        * Crear un nuevo repositorio (Docker Hub > Respositories > 'Create repository')
                            > Respository Name: docker-respository-actions
                            > Private | Public
                            Click 'Create'


* Terminal (Shortcuts)
    - CTRL + L: Limpia todo de la terminal
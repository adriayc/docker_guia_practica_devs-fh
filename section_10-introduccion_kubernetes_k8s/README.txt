INTRODUCCIÓN A KUBERNETES (K8S)

* Teslo App (K8S)
    - Instalación de Minikube (URL: https://minikube.sigs.k8s.io/docs/)
        $ curl -LO https://github.com/kubernetes/minikube/releases/latest/download/minikube-linux-amd64
        $ sudo install minikube-linux-amd64 /usr/local/bin/minikube && rm minikube-linux-amd64

    - Tareas:
        + Instalacion y configuración de Minikube
            * Mostrar la version de minikube
                $ minikube version
            * Iniciar su clúster
                $ minikube start
        + ConfiMap
            * Crear y configurar el archivo `postgres-config.yml`.
            * Buscar en la documentación `ConfigMap` (URL: https://kubernetes.io/docs/home/).
        + Secrets
            * Crear y configurar el archivo `postgres-secrets.yml`.
            * Buscar en la documentación `Secrets` (URL: https://kubernetes.io/docs/home/).
            * Base74 Encode (URL: https://codebeautify.org/base64-encode) o terminal (Linux)
                ```sh
                $ echo -n postgres | base64
                ```
        + Pods, Services y Deployments
            * Crear y configurar el archivo `postgres.yml`.
            * Buscar en la documentación `Deployments` (URL: https://kubernetes.io/docs/home/).
            * Buscar en la documentación `Services` (URL: https://kubernetes.io/docs/home/).
        + Desplegar la base de datos en el clúster.
            * Verificar la version de Kubernetes.
                ```sh
                $ minikube kubectl version
                ```
            * Listar los recursos de k8s (Pods, Deployments, ReplicaSets y Services)
                ```sh
                $ minikube kubectl get all
                ```
            * Aplicar la configuracion del config, secret, y service y deployment.
                ```sh
                $ minikube kubectl -- apply -f postgres-config.yml
                $ minikube kubectl -- apply -f postgres-secrets.yml
                $ minikube kubectl -- apply -f postgres.yml
                ```
            * Listar los recursos de k8s (Pods, Deployments, ReplicaSets y Services)
                ```sh
                $ minikube kubectl get all
                ```
            * Mostrar detalles de un recurso especifico o grupo de recursos
                ```sh
                $ minikube kubectl -- describe deployment.apps/postgres-deployment
                $ minikube kubectl describe pod postgres-deployment-644cc6778b-zfpwl
                ```
            * Imprime los registros o logs de un contenedor en un pod
                ```sh
                $ minikube kubectl -- logs pod/postgres-deployment-644cc6778b-zfpwl
                ```
        + Agregar PGAdmin al clúster.
            * Crear y configurar el archivo `pgadmin-secrets.yml`.
            * Crear y configurar el archivo `pgadmin.yml`.
        + Desplegar PGAdmin al clúster.
            * Aplicar la configuracion del secrets y deployment.
                ```sh
                $ kubectl apply -f pgadmin-secrets.yml
                $ kubectl apply -f pgadmin.yml
                ```
            * Listar los recursos de k8s (Pods, Deployments, ReplicaSets y Services)
                ```sh
                $ kubectl get all
                ```
            * Mostrar detalles de un recurso especifico o grupo de recursos
                ```sh
                $ kubectl describe pod/pgadmin-deployment-8fbffdcdf-dcsjj
                ```
            * Imprime los registros o logs de un contenedor en un pod
                ```sh
                $ kubectl logs pod/pgadmin-deployment-8fbffdcdf-dcsjj
                ```
            * Listar los recursos de k8s (Pods, Deployments, ReplicaSets y Services)
                ```sh
                $ kubectl get all
                ```
            * Acceder o exponer el servicio y minikube abre el navegador.
                ```sh
                $ minikube service pgadmin-service
                ```
            * O abrir el navegador manualmente (URL: http://127.0.0.1:46101) e ingresar las credenciales (email and password) definidos en el `pgadmin-secrets.yml`.
                - Agrear un nuevo servidor (Register > Server.. > Add a new server)
                    > General
                        > Name: PostgreSQL
                    > Connection
                        > Host name/address: postgres-service # {{POSTGRES_SERVICE_NAME}}
                        > Port: 5432
                        > Maintenance database: postgres
                        > Username: postgres # {{DB_USER_ON_SECRETS}}
                        > Password: ThisIsMyPassword # {{DB_PASSWORD_ON_SECRETS}}
                        > Save password? [TRUE]
                        Click 'Save'
        + Agregar el backend al clúster
            * Crear y configurar el archivo `backend-secrets.yml`.
            * Crear y configurar el archivo `backend.yml`.
        + Desplegar el backend app al clúster
            * Aplicar la configuracion del secrets y deployment.
                ```sh
                $ kubectl apply -f backend-secrets.yml
                $ kubectl apply -f backend.yml
                ```
            * Listar los recursos de k8s (Pods, Deployments, ReplicaSets y Services)
                ```sh
                $ kubectl get all
                ```
            * Mostrar detalles de un recurso especifico o grupo de recursos
                ```sh
                # Deplyment
                $ kubectl describe deployment.apps/backend-deployment

                # Pod
                $ kubectl describe pod/backend-deployment-6b9d669f58-9hw8z
                ```
            * Imprime los registros o logs de un contenedor en un pod
                ```sh
                # Pod
                $ kubectl logs pod/backend-deployment-6b9d669f58-9hw8z
                $ kubectl logs -f pod/backend-deployment-6b9d669f58-9hw8z   # Logs con seguiento
                ```

            * Actual el valor del `JWT_SECRET` del archivo `backend-secrets.yml`.
            * Aplicar la configuracion del secrets y deployment.
                ```sh
                $ kubectl apply -f backend-secrets.yml
                ```
            * Listar los recursos de k8s (Pods, Deployments, ReplicaSets y Services)
                ```sh
                $ kubectl get all
                ```
            * Gestionar el despliegue de un recurso
                ```sh
                $ kubectl rollout restart deployment backend-deployment
                ```
            * Listar los recursos de k8s (Pods, Deployments, ReplicaSets y Services)
                ```sh
                $ kubectl get all
                ```
            * Imprime los registros o logs de un contenedor en un pod
                ```sh
                # Pod
                $ kubectl logs -f pod/backend-deployment-776c597848-586gm   # Logs con seguiento
                ```
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
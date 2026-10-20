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
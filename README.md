# Softenforms - dev utils
<!-- command inspect config image -->
docker-compose --env-file .env.dev config

<!-- command genereted image -->
docker-compose --env-file .env.dev up -d
docker-compose --env-file .env.dev down

<!-- list all network -->
docker network ls

<!-- inspect network -->
docker network inspect _network_

<!-- inspect container -->
docker inspect _dockerID_


# Softenforms - prod utils

<!-- command genereted image ( alter to up ) -->
docker-compose --env-file .env.prod up -d
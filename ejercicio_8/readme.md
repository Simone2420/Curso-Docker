docker network create app-network

docker run -d \
  --name mi-postgres-db \
  --network app-network \
  -e POSTGRES_PASSWORD=12345678 \
  postgres:14-alpine


docker run -it --rm --network app-network alpine sh


apk add --no-cache iputils
ping mi-postgres-db
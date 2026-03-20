docker run -d --name misql-db -e MYSQL_ROOT_PASSWORD=12345678 -v mysql-data:/var/lib/mysql mysql

docker volume create mysql-data-2
docker exec -it misql-db mysql -u root -p


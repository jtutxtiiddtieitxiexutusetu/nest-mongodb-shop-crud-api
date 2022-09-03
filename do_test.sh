#!/bin/bash -li

docker compose -f docker-compose.yml -f docker-compose.test.yml build ;
docker compose -f docker-compose.yml -f docker-compose.test.yml up -d ;
docker compose -f docker-compose.yml -f docker-compose.test.yml exec backend bash -c "yarn test" ;
docker compose -f docker-compose.yml -f docker-compose.test.yml down ;

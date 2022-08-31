#!/bin/bash -li

docker compose build ;
docker compose up -d ;
docker compose exec backend bash ;
docker compose down ;

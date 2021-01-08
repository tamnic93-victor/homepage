#!/usr/bin/env zsh

if [[ "$(docker images -q sonarqube:8.6-community 2> /dev/null)" == "" ]]; then
  docker pull sonarqube:8.6-community
fi

docker run \
--name sonarqube \
--rm \
--publish 9000:9000 \
--detach \
--volume $(pwd)/sonarqube:/opt/sonarqube/data \
sonarqube:8.6-community 
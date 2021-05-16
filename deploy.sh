#!/bin/bash

# Get the latest code
git pull

# stop docker container
echo "Stopping container"
docker stop $(docker ps | grep 'python-docker' | awk '{ print $1 }')

# Build the image
docker build --tag python-docker .

# start container
echo "Starting container"
docker run --rm -d -p 5000:5000 python-docker
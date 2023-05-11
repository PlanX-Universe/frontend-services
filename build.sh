#!/bin/bash
baseDir=${pwd}

# build docker image from resulting jar
docker build -t planx.toolbox.endpoint.modelling .

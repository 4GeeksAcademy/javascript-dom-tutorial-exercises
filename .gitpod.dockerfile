FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@"27.0.6" -g
RUN npm i @learnpack/learnpack@2.1.20 -g && learnpack plugins:install learnpack-dom@0.0.11

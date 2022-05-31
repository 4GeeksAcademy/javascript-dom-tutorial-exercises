FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@27.0.6 -g
RUN npm i @learnpack/learnpack -g && learnpack plugins:install learnpack-dom@0.0.11

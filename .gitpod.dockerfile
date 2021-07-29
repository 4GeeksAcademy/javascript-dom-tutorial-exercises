FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@24.8.0 -g

RUN npm i learnpack@0.1.12 -g && learnpack plugins:install learnpack-dom

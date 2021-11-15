FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@27.0.6 -g
RUN npm i learnpack@0.1.19 -g && learnpack plugins:install learnpack-dom@0.0.4

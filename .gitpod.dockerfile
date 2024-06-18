FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@29.7.0 jest-environment-dom@29.7.0 -g
RUN npm i @learnpack/learnpack@2.1.50 -g && learnpack plugins:install @learnpack/dom@1.1.7

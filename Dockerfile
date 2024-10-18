FROM node:20-bookworm

WORKDIR /usr/src/

COPY ./package.json /usr/src/

RUN npm install 

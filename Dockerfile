FROM node:alpine

LABEL org.opencontainers.image.title="Image resizer" \
    org.opencontainers.image.description="Resizes the images" \
    org.opencontainers.image.authors="@daredevilteja"

RUN mkdir -p /ur/src/app

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN rm -rf node_modules
RUN npm install --platform=linux

ENTRYPOINT [ "npm", "start" ]
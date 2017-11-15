FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./index.html

COPY build/ ./
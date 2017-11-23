FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./index.html

COPY build/ ./

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY config/nginx/default.conf /etc/nginx/conf.d/default.conf

ARG WORK_DIR=/app
ARG HELL=/app

FROM node:18-alpine as builder

ARG WORK_DIR
RUN mkdir ${WORK_DIR}
WORKDIR ${WORK_DIR}
COPY package*.json .

RUN npm i @angular/cli
RUN npm i

COPY . .

RUN npm run build

FROM nginx:alpine

ARG WORK_DIR

COPY --from=builder ${WORK_DIR}/dist/sakai-ng /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD  nginx -g "daemon off;"




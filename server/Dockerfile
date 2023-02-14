FROM node:18-alpine

ARG WORK_DIR=/home/app
RUN mkdir -p ${WORK_DIR}
WORKDIR ${WORK_DIR}

COPY package*.json .
RUN npm i

COPY . /home/app

CMD npm start
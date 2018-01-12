FROM node:9.4.0-alpine

MAINTAINER Cristian B. Santos <cbsan.dev@gmail.com>

LABEL description="Curse MEAN TW"

RUN apk add --no-cache --virtual \
		ca-certificates \
        git \
        wget \
        tar \
        openssh \
        && set -xe \
    && npm_pkg="\
       nodemon \
       express-generator \
       @angular/cli"\
    && npm install -g $npm_pkg

WORKDIR /usr/src/app

EXPOSE 3000

# CMD ["npm","start"]
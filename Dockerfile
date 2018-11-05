FROM ubuntu:xenial

RUN apt-get update && apt-get install -y \
        curl \
        wget \
        nano \
        git \
        build-essential \
        libssl-dev \
        python \
        tzdata

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 10.6.0
RUN ln -fs /usr/share/zoneinfo/Etc/GMT-2 /etc/localtime && dpkg-reconfigure -f noninteractive tzdata

# NVM Manager
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

EXPOSE 9001

# Default dir in bash
COPY . /var/www/

CMD rm -rf ./node_modules \
    && npm install -g pm2 yarn --no-optional \
    && yarn && NODE_ENV=staging \ 
    && pm2-docker process.config.js \
    && bash

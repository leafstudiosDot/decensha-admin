FROM ubuntu:22.04

WORKDIR /adminpanel
COPY . /adminpanel

RUN apt-get update

RUN apt-get install -y \
    build-essential \
    curl

RUN curl -sL https://deb.nodesource.com/setup_19.x | bash -

RUN apt-get install -y nodejs
RUN npm install -g npm@latest
RUN npm install -g yarn

RUN apt-get update
RUN apt-get clean

ENV NODE_ENV development

#RUN cd /adminpanel; yarn install --production=false
EXPOSE 7811
#RUN yarn run build
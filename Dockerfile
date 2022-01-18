FROM node:latest as node
WORKDIR /usr/app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]
FROM node:latest

ADD . .

RUN yarn install
RUN yarn run build


CMD ["yarn", "run", "start"]
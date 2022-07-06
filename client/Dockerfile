FROM node:16.15.1

WORKDIR /client

COPY package*.json /client/

RUN npm install

EXPOSE 3000

CMD ["npm", "start",]
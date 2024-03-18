FROM node:14

WORKDIR /cloud-flare
COPY package.json .
RUN npm install
COPY . .
CMD npm start

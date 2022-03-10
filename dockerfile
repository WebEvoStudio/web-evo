FROM node:16
# Create app directory
WORKDIR /usr/src/app

COPY package*.json ../
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]

FROM node:16
# Create app directory
WORKDIR /usr/src/app

COPY package*.json ../
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
COPY . .
# RUN npm run build
# RUN npm run build:post
EXPOSE 3000
CMD [ "npm", "start" ]

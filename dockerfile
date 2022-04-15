# FROM node:16-alpine
# # Create app directory
# WORKDIR /usr/src/app
#
# COPY package*.json ../
# RUN npm config set registry https://registry.npm.taobao.org
# RUN npm install
# COPY . .
# # RUN npm run build
# RUN npm run build:post
# RUN npm prune --production
# EXPOSE 3000
# CMD [ "npm", "start" ]

FROM node:16 as BUILD_IMAGE
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
COPY . .
# RUN npm run build
RUN npm run build:post
RUN npm prune --production

FROM node:16-alpine
WORKDIR /usr/src/app

COPY --from=BUILD_IMAGE /usr/src/app/package.json ./
COPY --from=BUILD_IMAGE /usr/src/app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /usr/src/app/.next ./.next
COPY --from=BUILD_IMAGE /usr/src/app/public ./public
# COPY --from=BUILD_IMAGE /usr/src/app/next.config.js ./
EXPOSE 3000
CMD [ "npm", "start" ]


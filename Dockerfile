FROM node:18

WORKDIR /app

COPY ./package*.json /app/

RUN yarn install

COPY . .

# ENV PATH ./node_modules/.bin/:$PATH

# FROM node:18.7

# ARG API_BASE_URL
# ARG BASE_URL

# ENV NUXT_HOST=0.0.0.0
# ENV NUXT_PORT=4000
# ENV API_BASE_URL $API_BASE_URL
# ENV BASE_URL $BASE_URL

# WORKDIR /usr/src/app

# # install app dependencies
# COPY package*.json ./
# RUN yarn install

# # add app
# COPY ./ ./

# RUN yarn serve

# EXPOSE 3000

# # start app
# CMD node .output/server/index.mjs

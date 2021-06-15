### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:8-alpine as builder

COPY package*.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

RUN npm install

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

RUN npm install typescript@">=3.1.1 <3.3.0"

## Build the angular app in production mode and store the artifact in dist folder
CMD $(npm bin)/ng  serve  --host 0.0.0.0 --disableHostCheck true

EXPOSE 4200
### STAGE 2: Setup ###

#FROM nginx:1.13.3-alpine

## Copy our default nginx config
#COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
#RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
#COPY --from=builder /ng-app/dist /usr/share/nginx/html


#CMD ["nginx", "-g", "daemon off;"]
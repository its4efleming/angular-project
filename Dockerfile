# Start your image with a node base image
FROM node:alpine

# The /app directory should act as the main application directory
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng","serve","--host","0.0.0.0"]
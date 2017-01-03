FROM node:7.2.1-alpine

RUN npm install -g yarn
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN yarn run build --release
# Copy applicaiton files

# Install Node.js dependencies

CMD [ "node", "build/server.js" ]

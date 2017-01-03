FROM node:7.2-wheezy

RUN npm install -g yarn
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN yarn
RUN npm install -g node-gyp
RUN yarn run build --release
# Copy applicaiton files

# Install Node.js dependencies

CMD [ "node", "build/server.js" ]

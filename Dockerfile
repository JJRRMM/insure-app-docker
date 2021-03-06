FROM node:latest

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/node_modules/.bin` to $PATH
ENV PATH /usr/src/node_modules/.bin:$PATH

# Copy source files.
COPY . /usr/src/app
# install and cache app dependencies
ADD package.json /usr/src/app/package.json
RUN npm install

# start app
CMD ["npm", "start"]

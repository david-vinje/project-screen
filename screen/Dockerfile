# Use an official Node.js runtime as the base image
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /screen

# Copy package.json and package-lock.json to the container
COPY screen/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY screen .

# Build the React app
RUN npm install -g serve \
    && npm run build \
    && rm -fr node_modules

# Expose the port on which the app will run
EXPOSE 3000

# Define the command to run the app
CMD [ "serve", "-s", "build" ]

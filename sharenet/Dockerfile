# Use an official Node.js runtime as a parent image
FROM node:latest as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the app source code to the container
COPY . .

# Build the Vue.js app for production
RUN npm run build

# Use NGINX as a lightweight HTTP server to serve the static files
FROM nginx:latest as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 to the Docker host
EXPOSE 80

# Command to run the NGINX server
CMD ["nginx", "-g", "daemon off;"]

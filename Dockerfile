# Stage 1: Build the React app
FROM node:20-alpine as build

# Create app directory
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source and build it
COPY . .
RUN npm run build

# Stage 2: Serve the React build with Nginx
FROM nginx:alpine

# Copy built React app to Nginx public folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

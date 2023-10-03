# Use an official MongoDB image as the base image
FROM mongo:latest

# Copy the initialization script into the container
COPY init_mongo.js /docker-entrypoint-initdb.d/

# Expose the MongoDB default port (27017)
EXPOSE 27017

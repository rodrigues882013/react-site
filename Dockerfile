FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install all dependencies of the current project.
COPY package*.json ./
RUN npm config set registry http://registry.npmjs.org/ && npm install

# Copy all local files into the image.
COPY . .

# Build for production.
CMD ["npm", "run", "dev"]
EXPOSE 8080


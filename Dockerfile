#Image base
FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
COPY ./ ./

RUN npm install

CMD [ "npm", "run", "dev" ]

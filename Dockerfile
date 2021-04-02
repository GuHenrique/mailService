FROM node:latest

LABEL author = "gustavo._henrique@hotmail.com"
LABEL version = 1

# Create app directory
WORKDIR /app/mails

# Install app dependencies
COPY . .
RUN npm install

# Copy app source code

#Expose port and start application
EXPOSE 3000
CMD [ "npm", "start" ]
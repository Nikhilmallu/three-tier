FROM node:19.0.0-alpine
EXPOSE 8080
COPY server.js .
CMD node server.js

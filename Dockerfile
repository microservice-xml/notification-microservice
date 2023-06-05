FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./src ./src
EXPOSE 8088
EXPOSE 9088
CMD ["npm", "start"]
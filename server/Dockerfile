FROM node:lts-alpine

WORKDIR /
COPY package*.json .
RUN npm install
COPY . .

EXPOSE 4444

CMD ["npm", "run", "start"]

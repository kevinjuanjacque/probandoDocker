FROM node:10

WORKDIR /nodejs

COPY package.json ./

RUN npm install

COPY . .

CMD ["node","backend/index.js"]
FROM node:21.7.1-alpine3.18

WORKDIR /app

COPY package.json package-lock.json ./
# docker-compose up --build --force-recreate
RUN npm install

COPY . .

CMD ["node", "src/index.js"]

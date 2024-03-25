FROM node:21.7.1-alpine3.18

WORKDIR /app

COPY package.json package-lock.json ./

# docker-compose up --build --force-recreate

RUN npm install

COPY . .


# ENV ENV_JWT_SECRET_PRIVATE_KEY SecretoJWT
# ENV ENV_MONGODB_CONNECTION_STRING mongodb://admin:admin_password@localhost:27017/
# ENV ENV_PORT 3000

CMD ["node", "src/index.js"]

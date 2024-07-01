FROM node:22.3.0-alpine3.20
WORKDIR /app
COPY package.json package-lock.json ./
# docker-compose up --build --force-recreate
RUN npm install
COPY . .
CMD ["node", "src/index.js"]

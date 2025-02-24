FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY .npmrc ./
RUN npm install
COPY . .
RUN npm run build
CMD ["node", ".output/server/index.mjs"]
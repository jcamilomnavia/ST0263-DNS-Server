FROM node:12-alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
RUN npm run build
COPY . .
EXPOSE 80
CMD ["serve", "-p", "80", "-s", "."]
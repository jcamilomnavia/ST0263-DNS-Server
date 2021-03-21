FROM node:12-alpine
WORKDIR /api
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
RUN npm run build
COPY . .
EXPOSE 3000
CMD ["/bin/sh", "entrypoint.sh"]

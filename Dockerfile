FROM node:21-alpine
WORKDIR /app
COPY . .
COPY ./src/configs/backend-config-k8s.js ./src/configs/backend-config.js

RUN rm -rf node_modules & rm -rf dist & npm install
RUN npm run build

EXPOSE 5170
CMD ["npm", "run", "preview"]

FROM node:21-alpine as build
WORKDIR /app
COPY . .
COPY ./src/configs/backend-config-k8s.js ./src/configs/backend-config.js

RUN rm -rf node_modules & rm -rf dist & npm install
RUN npm run build

FROM node:21-alpine
WORKDIR /app/
COPY --from=build /app/dist ./dist
RUN npm install -g serve

EXPOSE 5170
CMD ["serve", "-s", "dist", "-l", "5170"]

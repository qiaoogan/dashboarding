FROM node:21-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:21-alpine
WORKDIR /root/
COPY --from=build /app/dist ./dist
RUN npm install -g serve
EXPOSE 8331
CMD ["serve", "-s", "dist", "-l", "8331"]

FROM node:21-alpine
WORKDIR /app
COPY . .

RUN rm -rf node_modules & rm -rf dist & npm install
RUN npm run build

EXPOSE 5170
CMD ["npm", "run", "preview"]

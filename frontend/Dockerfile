FROM node:18.11.0-alpine

WORKDIR /var/app/frontend

COPY . .

RUN yarn install

CMD ["yarn", "run", "dev"]

EXPOSE 5173


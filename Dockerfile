FROM node:18

WORKDIR /restuarant

COPY . .

RUN npm install

CMD [ "npm","run","dev" ]
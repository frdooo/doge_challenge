FROM node:15.13-alpine
WORKDIR /doge_challenge
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
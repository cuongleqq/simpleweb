FROM node:12-alpine

ENV NODE_ENV=production
COPY . /app/

WORKDIR /app
RUN npm install --production
CMD ["node", "index.js"]

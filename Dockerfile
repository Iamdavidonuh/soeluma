FROM node:13-alpine

RUN mkdir -p /home/sandbox

COPY . /home/sandbox

CMD ["node", "/home/sandbox/server.js"]

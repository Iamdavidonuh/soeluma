FROM node:13-alpine

# specify env variables
ENV NODE_ENV=production
ENV REDIS_PORT=6379
ENV PORT=3000
ENV USE_DOCKER=true
ENV useAtlasDB=false
ENV MONGODB_USER="admin"
ENV MONGODB_PASS="password"
ENV MONGODB_DOCKER_NAME="mongodb"
ENV MONGO_DBNAME="Movies"
ENV MONGODB_URI_ATLAS=""
ENV REDIS_DOCKER_NAME="redis"
ENV REDIS_DOCKER_PORT=6379
#6520
RUN mkdir -p /home/sandbox

WORKDIR /home/sandbox


RUN yarn install --frozen-lockfile

COPY . /home/sandbox

CMD ["node", "/home/sandbox/server.js"]

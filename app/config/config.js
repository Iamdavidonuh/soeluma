const redis = require('redis');
const redisPort = 6379;
const client = redis.createClient(redisPort);
const { promisify } = require("util");

const get = promisify(client.get).bind(client);
module.exports =  {

    NODE_ENV:process.env.NODE_ENV,
    port:process.env.PORT,
    mongoDBLocalUri: process.env.MONGODB_URI_LOCAL,
    mongoDBDockerUri: process.env.MONGODB_URI_DOCKER,
    redisClient: client,
    get: get,
    useDocker: process.env.USE_DOCKER
};

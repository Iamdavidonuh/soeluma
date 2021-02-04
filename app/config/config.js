const { connectRedis } = require('../libs/redis');
const { promisify } = require("util");

const client = connectRedis();

//promisify redis get method
const redis_get = promisify(client.get).bind(client);

module.exports =  {

    NODE_ENV:process.env.NODE_ENV,
    EXPRESS_PORT:process.env.EXPRESS_PORT,
    mongoDBLocalUri: process.env.MONGODB_URI_LOCAL,
    mongoDBAtlasUri: process.env.MONGODB_URI_ATLAS,
    useDocker: process.env.USE_DOCKER,
    useAtlasDB:process.env.useAtlasDB,
    MONGODB_USER: process.env.MONGODB_USER,
    MONGODB_PASS: process.env.MONGODB_PASS,
    MONGO_DBNAME: process.env.MONGO_DBNAME,
    mongodbDockerName: process.env.MONGODB_DOCKER_NAME,
    REDIS_PORT: process.env.REDIS_PORT,
    redisClient: client,
    redis_get: redis_get
};

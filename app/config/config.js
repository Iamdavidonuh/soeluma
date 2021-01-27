const redis = require('redis');
const { promisify } = require("util");


const client = redis.createClient(process.env.REDIS_PORT);
//promisify redis get method
const redis_get = promisify(client.get).bind(client);



module.exports =  {

    NODE_ENV:process.env.NODE_ENV,
    EXPRESS_PORT:process.env.EXPRESS_PORT,
    mongoDBLocalUri: process.env.MONGODB_URI_LOCAL,
    mongoDBDockerUri: process.env.MONGODB_URI_DOCKER,
    useDocker: process.env.USE_DOCKER,
    MONGODB_USER: process.env.MONGODB_USER,
    MONGODB_PASS: process.env.MONGODB_PASS,
    MONGO_DBNAME: process.env.MONGO_DBNAME,
    REDIS_PORT: process.env.REDIS_PORT,
    redisClient: client,
    redis_get: redis_get
};

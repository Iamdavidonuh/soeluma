const redis = require('redis');
const { promisify } = require("util");

if (process.env.REDIS_CLOUD_URL){

    var rtg = require('url').parse(process.env.REDIS_CLOUD_URL);
    var client = redis.createClient(rtg.port, rtg.hostname);
    client.auth(rtg.auth.split(":")[1]);

}else{
    var client = redis.createClient(process.env.REDIS_PORT);
}
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
    mongodb_servicename: process.env.MONGODB_SERVICENAME,
    REDIS_PORT: process.env.REDIS_PORT,
    redisClient: client,
    redis_get: redis_get
};

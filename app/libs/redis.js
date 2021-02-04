const redis = require('redis');

function connectRedis(){

    if (process.env.REDIS_CLOUD_URL){

        var rtg = new URL(process.env.REDIS_CLOUD_URL);
        var client = redis.createClient(rtg.port, rtg.hostname);
        client.auth(rtg.auth.split(":")[1]);
    
    }else if (process.env.USE_DOCKER=='true'){
        var client = redis.createClient(
            port=process.env.REDIS_DOCKER_PORT,
            host=process.env.REDIS_DOCKER_NAME);
    }
    else{
        var client = redis.createClient(process.env.REDIS_PORT);
    }
    return client
}

module.exports = {
    connectRedis: connectRedis
}
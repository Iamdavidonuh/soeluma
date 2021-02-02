const { redis_get, redisClient } = require('../config/config');




function normalizeQueryParam(query){
    /**
     * Replace all spaces inbetween texts with an underscore
     */
    const cleaned = query.replace(/\s/g, '_')
    return cleaned
}

function dateConverter(timestamp){
    /**
     * Converts a timestamp to a date and returns a DateString
     */
    let date = new Date(timestamp)
    return date.toDateString()

}

function getCacheDataOrNull(searchTerm){
    console.log("\n\n.... redis get item: ", redis_get)
    return redis_get(searchTerm)
}

const updateCache = async (searchTerm, data) => {
    try{
        redisClient.set(searchTerm, JSON.stringify(data));
    }catch(err){
        console.log(err);
    }
    
}




module.exports = {
    getCacheDataOrNull: getCacheDataOrNull,
    updateCache: updateCache,
    normalizeQueryParam : normalizeQueryParam,
    dateConverter : dateConverter,
}


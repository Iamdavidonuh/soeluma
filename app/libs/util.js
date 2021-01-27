const { redisClient, get } = require('../config/config');

function getCacheDataOrNull(searchTerm){
    return get(searchTerm)
}

const updateCache = async (searchTerm, data) => {
    try{
        redisClient.set(searchTerm, JSON.stringify(data));
    }catch(err){
        console.log(err);
    }
    
}


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

module.exports = {
    getCacheDataOrNull: getCacheDataOrNull,
    updateCache: updateCache,
    normalizeQueryParam : normalizeQueryParam,
    dateConverter : dateConverter,
}


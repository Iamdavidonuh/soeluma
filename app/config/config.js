

module.exports =  {

    NODE_ENV:process.env.NODE_ENV,
    port:process.env.PORT,
    mongoDBLocalUri: process.env.MONGODB_URI_LOCAL,
    mongoDBDockerUri: process.env.MONGODB_URI_DOCKER,
};

const mongoose = require('mongoose');
const { 
    mongoDBAtlasUri, mongoDBLocalUri,
    MONGODB_USER, MONGODB_PASS, MONGO_DBNAME,
    mongodb_servicename
} = require('../config/config.js');



const connectDBLocal = async() => {
    try{
        await mongoose.connect(mongoDBLocalUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            auth: { authSource: 'admin' },
            user: MONGODB_USER,
            pass: MONGODB_PASS,
        })
        console.log('Local MongoDB Connected...');
    }catch(err){
        console.log(err.message);

        //exit process with failure
        process.exit(1)
    }
}


const connectDBDocker = async() => {
    const mongoDBDockerUri = `mongodb://${admin}:${password}@${mongodb_servicename}/${MONGO_DBNAME}`; 
    try{
        await mongoose.connect(mongoDBDockerUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            auth: { authSource: 'admin' },
            user: MONGODB_USER,
            pass: MONGODB_PASS,
        })
        console.log('Docker MongoDB Connected...');
    }catch(err){
        console.log(err.message);

        //exit process with failure
        process.exit(1)
    }
}

const connectDBAtlas = async() => {
    try{
        await mongoose.connect(mongoDBAtlasUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        console.log('Atlas MongoDB Connected...');
    }catch(err){
        console.log(err.message);

        //exit process with failure
        process.exit(1)
    }
}
module.exports = {
    
    connectDBDocker:connectDBDocker,
    connectDBLocal:connectDBLocal,
    connectDBAtlas: connectDBAtlas,

}
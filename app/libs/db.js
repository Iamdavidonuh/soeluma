const mongoose = require('mongoose');
const { mongoDBLocalUri, mongoDBDockerUri, mongoDBAtlasUri, MONGODB_USER, MONGODB_PASS } = require('../config/config.js');


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
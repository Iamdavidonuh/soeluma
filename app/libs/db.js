const mongoose = require('mongoose');
const { mongoDBLocalUri, mongoDBDockerUri } = require('../config/config.js');


const connectDBLocal = async() => {
    try{
        await mongoose.connect(mongoDBLocalUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            auth: { authSource: 'admin' },
            user: "admin",
            pass: "password",
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
            user: "admin",
            pass: "password",
        })
        console.log('Docker MongoDB Connected...');
    }catch(err){
        console.log(err.message);

        //exit process with failure
        process.exit(1)
    }
}


module.exports.connectDBDocker = connectDBDocker;
module.exports.connectDBLocal = connectDBLocal;

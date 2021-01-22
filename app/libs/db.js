const mongoose = require('mongoose');

let mongodbURILocal = "mongodb://admin:password@localhost:27017";
let mongodbURIDocker = "mongodb://admin:password@mongodb";

const connectDBLocal = async() => {
    try{
        await mongoose.connect(mongodbURILocal, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
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
        await mongoose.connect(mongodbURIDocker, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
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
const mongoose = require('mongoose');

let mongodbURILocal = "mongodb://localhost:27017/Movie";
let mongodbURIDocker = "mongodb://admin:password@mongodb/Movie";

const connectDBLocal = async() => {
    try{
        await mongoose.connect(mongodbURILocal, {
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
        await mongoose.connect(mongodbURIDocker, {
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
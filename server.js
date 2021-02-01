const { EXPRESS_PORT, redisClient, useDocker, useAtlasDB } = require('./app/config/config');
const { connectDBDocker, connectDBLocal, connectDBAtlas } = require('./app/libs/db')
const app = require('./app/app.js');

//console.log('check useatlasdb',typeof useAtlasDB);

//connect database
if(useDocker==='true'){
    console.log("connecting docker");
    connectDBDocker();
}else if(useAtlasDB==='true'){
    console.log("connecting atlas db");
    connectDBAtlas();
}else{
    console.log("connecting to local");
    connectDBLocal();
}

const hostname = '0.0.0.0';

// log error if any occurs
redisClient.on("error", (err) => {
    console.log(err);
});

app.listen(EXPRESS_PORT, hostname, () =>{
    console.log(`Server running at ${hostname}:${EXPRESS_PORT}`)
});


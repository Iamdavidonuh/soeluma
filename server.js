const { EXPRESS_PORT, redisClient, useDocker, useAtlasDB } = require('./app/config/config');
const { connectDBDocker, connectDBLocal, connectDBAtlas } = require('./app/libs/db')
const app = require('./app/app.js');


//connect database
if(useDocker===true){
    connectDBDocker();
}else if(useAtlasDB===true){
    connectDBAtlas();
}else{
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


const { port, redisClient, useDocker } = require('./app/config/config');
const { connectDBDocker, connectDBLocal } = require('./app/libs/db')
const app = require('./app/app.js');


//connect database

(useDocker===true) ? connectDBDocker() : connectDBLocal();

const hostname = '0.0.0.0';

// log error if any occurs
redisClient.on("error", (err) => {
    console.log(err);
});

app.listen(port, hostname, () =>{
    console.log(`Server running at ${hostname}:${port}`)
});


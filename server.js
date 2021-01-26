const express = require('express');
const { port } = require('./app/config/config');
const { connectDBDocker, connectDBLocal } = require('./app/libs/db')
const app = require('./app/app.js');

//connect database
//connectDBLocal()

const hostname = '0.0.0.0';


app.listen(port, hostname, () =>{
    console.log(`Server running at ${hostname}:${port}`)
});


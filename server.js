const express = require('express');
const { connectDBDocker, connectDBLocal } = require('./app/libs/db')
const app = require('./app/app.js');

//connect database
//connectDBLocal()

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;



app.listen(port, hostname, () =>{
    console.log(`Server running at ${hostname}:${port}`)
});


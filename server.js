const http = require('http');
const express = require('express');
const { env } = require('process');

const app = express();

const hostname = 'localhost';
const port = env.PORT || 3000;

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API RUNNING!'));

app.use('/api/get-movie', require('./app/routes/api/tomatoes'));



app.listen(port, hostname, () =>{
    console.log(`Server running at ${hostname}:${port}`)
});


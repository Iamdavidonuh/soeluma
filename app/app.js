const express = require('express');

const app = express();



// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API RUNNING!'));

app.use('/api/get-movie', require('./routes/api/tomatoes'));


module.exports = app;

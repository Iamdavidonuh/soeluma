const express = require('express');
const { connectDBDocker } = require('./app/libs/db')

const app = express();

//connect database
connectDBDocker()

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API RUNNING!'));

app.use('/api/get-movie', require('./app/routes/api/tomatoes'));



app.listen(port, hostname, () =>{
    console.log(`Server running at ${hostname}:${port}`)
});

module.exports = app;

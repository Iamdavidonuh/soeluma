const { getMovieData } = require('../engines/rottenTomatoes.js');
const app = require('../app.js');
const requests = require('supertest');
const { connectDBLocal } = require('../libs/db.js');
const mongoose = require('mongoose');




describe('tests relating to rottentommatoes engine', () => {

    test('test endpoint returns object', async (done) => {
        let query = "captain america"
        let response = await getMovieData(query);
        expect(response).toBeInstanceOf(Object);
        done();
    });
});


describe('test /get-movie endpoint', () => {

    let mongoDBLocalUri =" mongodb://localhost:27017"
    let connection;
    let db;
    beforeAll(async () => {
        connnection = await mongoose.connect(global.__MONGO_URI__, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //auth: {authSource:"admin"},
            //user: "admin",
            //pass: "password"
        });
    });

    afterAll(async (done) => {
        console.log("afterall closing");
        await mongoose.disconnect()
        done();
    });

    test('test get request throws error', async (done) => {
        const res = await requests(app)
            .get("/api/get-movie")
        expect(res.status).toBe(404)
        done();
    });

    test('test empty data sent throws error', async (done) => {
        const res = await requests(app)
            .post('/api/get-movie')
            .send({ movie_title: '' })
        expect(res.status).toBe(400)
        done();
    
    });

    test('test search item returns object', async (done) => {
        const res = await requests(app)
            .post('/api/get-movie')
            .send({ movie_title: 'captain america' })
        expect(res.body).toBeInstanceOf(Object);
        expect(res.status).toBe(200);
        done();
    
    });

});

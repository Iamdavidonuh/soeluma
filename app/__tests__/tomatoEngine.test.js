const { getMovieData } = require('../engines/rottenTomatoes.js');
const app = require('../app.js');
const requests = require('supertest');
const {connectDBTest} = require('../libs/db.js');
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

    beforeAll(done => done());


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

});

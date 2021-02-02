const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const Movie = require('../../models/movies');

const { getMovieData, parseMovieDataRT } = require('../../engines/rottenTomatoes');
const { getCacheDataOrNull, updateCache } = require('../../libs/util');

// @route POST api/tomatoes
// @desc Get movie detail
// @access Public

router.post(
    '/',
    [
        check('movie_title', "Movie Name is Required").not().isEmpty()
    ],
    async (req, res) => {
        console.log('hitting get movie view');
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});
        }

        const { movie_title } = req.body;
        console.log('request.body returned: ', movie_title);
        const movie_title_lower = movie_title.toLowerCase();

        try{
            // check item in cache
            console.log('\n\n checking cache \n\n');
            const cache_hit = await getCacheDataOrNull(movie_title_lower);
            console.log("\n\n cache hit", cache_hit);
            if (cache_hit != null){
                res.json(JSON.parse(cache_hit));
            }
            else{
                console.log("finding movie......");
                let  movie = await Movie.findOne({ title : movie_title_lower });
                if (!movie){
                    let data = await getMovieData(movie_title_lower);
                    const response = parseMovieDataRT(data);
                    
                    movie = new Movie({
                        ...response,
                        meta_data: data
                    })
                    await  movie.save();
                    //update cache
                    updateCache(movie_title_lower, movie);
                    return res.json(movie);
                }
                res.json(movie);
            }
            
        }catch(error){
            console.log(error.message);
            res.status(500).send(error.message);
        }
    }
    );



module.exports = router;



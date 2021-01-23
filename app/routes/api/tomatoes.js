const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const Movie = require('../../models/movies');

const { getMovieData, parseMovieDataRT } = require('../../engines/rottenTomatoes');

// @route POST api/tomatoes
// @desc Get movie detail
// @access Public

router.post(
    '/',
    [
        check('movie_title', "Movie Name is Required").not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});
        }

        const { movie_title } = req.body;
        try{ 
            let movie = await Movie.findOne({ title : movie_title.toLowerCase() })
            
            if (!movie){
                
                let data = await getMovieData(movie_title)
                const response = parseMovieDataRT(data);
                    
                movie = new Movie({
                    ...response,
                    meta_data: data
                })
                return movie.save();
            }

            res.json(movie);
            
        }catch(error){
            console.log(error.message);
            req.status(500).send("Server Error")
        }
    }
    );



module.exports = router;



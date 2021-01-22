const express = require('express');
const { check, validationResult } = require('express-validator');
const { model } = require('mongoose');
const router = express.Router();

const { getMovieData, parseMovieDataRT } = require('../../engines/rottenTomatoes');

// @route POST api/tomatoes
// @desc Get movie detail
// @access Public

router.post(
    '/',
    [
        check('name', "Movie Name is Required").not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});
        }

        const { name } = req.body;
        try{
            getMovieData(name).then(data => {
                console.log(data.data);
                const response = parseMovieDataRT(data.data);
                res.json(response);
            }).catch(error => console.log(error));
        }catch(error){
            console.log(error.message);
            req.status(500).send("Server Error")
        }
    }
    );



module.exports = router;



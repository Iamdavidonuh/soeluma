const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    studio: {
        type: String,
        required: true
    },
    consensus: {
        type: String,
        required: true
    },
    movie_id: {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    avgRating: {
        type: mongoose.SchemaTypes.Decimal128,
        required: true
    },
    theaterReleaseDate:{
        type: Date,
        required: false
    },
    meta_data: {
        type: mongoose.SchemaTypes.Mixed,
        required: false,
    },
    data_created: {
        type: Date,
        default: Date.now
    }

})


module.exports = Movie = mongoose.model('movie', MovieSchema)
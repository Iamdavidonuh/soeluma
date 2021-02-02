const axios = require('axios');
const cheerio = require('cheerio');
const { normalizeQueryParam, dateConverter } = require('../libs/util');

function buildMovieDetailsUrl(query){
    const base_url = `https://www.rottentomatoes.com/api/private/v1.0/movies/${query}`
    return base_url
}

async function getMovieData(query){
    const cleanedUrl = buildMovieDetailsUrl(normalizeQueryParam(query));
    let response = await axios.get(cleanedUrl);
    console.log("response from axios: ", response);
    return response.data;
}

function alternateMovieParse(query){

    query = normalizeQueryParam(query)
    const url = `https://www.rottentomatoes.com/m/${query}`;
    const data = [];
    
    axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        
        const main_container = $("#main_container")
        const meta_data = main_container.find('ul[class="content-meta info"] > li')
        
        //@param RTRatings => RottenTomatoes Ratings
        const RTRatings = {
            'avg_rating': main_container.find('span[class="js-audience-score-info"]').text(),
            'ratings_count': main_container.find('div[class="score_details__big-text js-audience-score-info"]').text() 
        }

        const meta_data_json = {
            'pg' : String($(meta_data[0]).find(".meta-value").text()).trim(),
            'genre' : String($(meta_data[1]).find(".meta-value").text()).trim(),
            'director' : String($(meta_data[3]).find(".meta-value").text()).trim(),
            'producer' : String($(meta_data[4]).find(".meta-value").text()).trim(),
            'releaseDate' : String($(meta_data[5]).find(".meta-value").text()).trim(),
            'boxOffice' : String($(meta_data[7]).find(".meta-value").text()).trim()
            };
        
        data.push({
            'name': movie_name,
            'synopsis': String(main_container.find('#movieSynopsis').text()).trim(),
            'metaContent' : meta_data_json,
            'ratings': RTRatings

        });
    });
    return data;
}


const parseMovieDataRT = movieJson => {
    /**
     * parses the json data gotten from RT and returns necessary information
     * 
     */
    const dataObj = {};
    let releaseDate = dateConverter(movieJson.ratings.theaterReleaseDate);
    
    dataObj['title'] = movieJson.title;
    dataObj['studio'] = movieJson.studio;
    dataObj['avgRating'] = movieJson.ratingSummary.allCritics.averageRating;
    dataObj['consensus'] = movieJson.ratingSummary.consensus;
    dataObj['movie_id'] = movieJson.id;
    dataObj['synopsis'] = movieJson.synopsis;
    dataObj['theaterReleaseDate'] = releaseDate;

    return dataObj;
}

module.exports.getMovieData = getMovieData;
module.exports.alternateMovieParse = alternateMovieParse;
module.exports.parseMovieDataRT = parseMovieDataRT;
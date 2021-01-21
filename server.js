const axios = require('axios');
const cheerio = require('cheerio');
const movie_name = "shooter"
const url = `https://www.rottentomatoes.com/m/${movie_name}`


axios(url)
.then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const data = [];
    const main_container = $("#main_container")
    const meta_data = main_container.find('ul[class="content-meta info"] > li')
    //const meta_data_json = []
    
    //.cache @param RTRatings => RottenTomatoes Ratings
    //const RTRatings = []

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

    console.log(data);
})
.catch(console.error);

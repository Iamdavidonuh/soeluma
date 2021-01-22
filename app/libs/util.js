

function normalizeQueryParam(query){
    /**
     * Replace all spaces inbetween texts with an underscore
     */
    const cleaned = query.replace(/\s/g, '_')
    return cleaned
}

function dateConverter(timestamp){
    /**
     * Converts a timestamp to a date and returns a DateString
     */
    let date = new Date(timestamp)
    return date.toDateString()

}

exports.normalizeQueryParam = normalizeQueryParam;
exports.dateConverter = dateConverter;
const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidHVtYmxlLXdvb2QiLCJhIjoiY2t2MTJ1OW83MGQwcTJ2cG5iN3VvbzN1eSJ9.1Huokl1hTXYDqCULC8S-_A&limit=1'
    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to geocoding service.', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
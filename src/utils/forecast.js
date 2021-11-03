const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2da57a01865b9e9cc527667691a4839b&query=' + long + ',' + lat + '&units=m'
    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback(body.error.info,undefined)
        } else {
            const temp = body.current.temperature
            const feelsLikeTemp = body.current.feelslike
            const description = body.current.weather_descriptions[0]
            callback(undefined, description + '. It is currently '+ temp + ' degrees out. It feels like ' + feelsLikeTemp + ' degrees out.')
        }
    })
}

module.exports = forecast
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/96aa84042bf57d45a4344f680d8a6148/' + latitude + ',' + longitude+'?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {    
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. with max temperature '+ body.daily.data[0].temperatureMax+'  and with min temperature  '+ body.daily.data[0].temperatureMin) 
        }
    })
}

module.exports = forecast
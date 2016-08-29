var axios = require('axios');
var APPID = '44a86a8b3ec6689ff87470bb49c396f0';
var param = '&appid=' + APPID;

function getWeather(city) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + param);
}

var helpers = {
  getWeatherInfo: function(city) {
    return getWeather(city)
      .then(function(info) {
        console.log('INFO', info);
      })
  }
};

module.exports = helpers;

var React = require('react');
var DailyWeather = require('./DailyWeather');
var DailyWeatherDetailed = require('./DailyWeatherDetailed');
var styles = require('../styles');

var ForecastUI = React.createClass({
  getWeatherComponents: function() {
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var iconClasses = {
      "Thunderstorm": "wi wi-day-thunderstorm",
      "Drizzle": "wi wi-day-showers",
      "Rain": "wi wi-day-rain",
      "Snow": "wi-day-snow",
      "Clear": "wi wi-day-sunny",
      "Clouds": "wi wi-day-cloudy"
    };


    function propsParse(weatherInfo) {
      var date = new Date(weatherInfo.dt * 1000);
      var dayOfTheWeek = week[date.getDay()];
      var dateFormatted = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.${date.getMonth() < 9 ? '0'+ (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear()}`;
      var weatherCondition = weatherInfo.weather[0].main;
      return {
        date: date,
        dayOfTheWeek: dayOfTheWeek,
        dateFormatted: dateFormatted,
        weatherCondition: weatherCondition,
        temp: weatherInfo.temp
      };
    };
    if (this.props.route.day === undefined) {
      return this.props.weatherInfo.map(function(weatherInfo) {
        return <DailyWeather key={weatherInfo.dt} info={propsParse(weatherInfo)} city={this.props.city} iconClasses={iconClasses} />;
      }, this);
    } else {
        return <DailyWeatherDetailed info={propsParse(this.props.weatherInfo[week.indexOf(this.props.route.day)])} iconClasses={iconClasses} />
    }
  },
  render: function() {
    var dailyComponents = this.getWeatherComponents();
    return (
      this.props.isLoading === true
      ? <p>LOADING</p>
      :  <div>
            <h1 className='text-center' style={styles.cityHeader}>{this.props.city}</h1>
            <div className='container-fluid'>
              <div style={styles.flexContainer}>
                {dailyComponents}
              </div>
            </div>
          </div>
    )
  }
});

module.exports = ForecastUI;

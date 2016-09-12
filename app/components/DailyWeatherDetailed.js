var React = require('react');
var styles = require('../styles');

var DailyWeatherDetailed = React.createClass({
  render: function() {
    var iconClasses = {
      "Thunderstorm": "wi wi-day-thunderstorm",
      "Drizzle": "wi wi-day-showers",
      "Rain": "wi wi-day-rain",
      "Snow": "wi-day-snow",
      "Clear": "wi wi-day-sunny",
      "Clouds": "wi wi-day-cloudy"
    };
    var date = new Date(this.props.info.dt * 1000);
    var weatherCondition = this.props.info.weather[0].main;
    var dateFormatted = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.${date.getMonth() < 9 ? '0'+ (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear()}`;
    return (
      <div style={styles.flexContainerDetailed}>
        <p style={styles.weatherInfoDetailed}>{dateFormatted}</p>
        <i className={iconClasses[weatherCondition]} style={styles.weatherIconDetailed} ></i>
        <p style={styles.weatherInfoDetailed}>Morning: {Math.round(this.props.info.temp.morn)}&deg;</p>
        <p style={styles.weatherInfoDetailed}>Day: {Math.round(this.props.info.temp.day)}&deg;</p>
        <p style={styles.weatherInfoDetailed}>Evening: {Math.round(this.props.info.temp.eve)}&deg;</p>
        <p style={styles.weatherInfoDetailed}>Night: {Math.round(this.props.info.temp.night)}&deg;</p>
      </div>
    )
  }
});

module.exports = DailyWeatherDetailed;

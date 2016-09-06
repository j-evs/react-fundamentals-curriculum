var React = require('react');
var styles = require('../styles');
var weatherIconStyling = require('../weather-icons/css/weather-icons.min.css');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var DailyWeather = React.createClass({
  formatProps: function() {

  },
  render: function() {
    var date = new Date(this.props.info.dt * 1000);
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var weatherCondition = this.props.info.weather[0].main;
    var dayOfTheWeek = week[date.getDay()];
    var iconClasses = {
      "Thunderstorm": "wi wi-day-thunderstorm",
      "Drizzle": "wi wi-day-showers",
      "Rain": "wi wi-day-rain",
      "Snow": "wi-day-snow",
      "Clear": "wi wi-day-sunny",
      "Clouds": "wi wi-day-cloudy"
    };
    var tempInfo = this.props.info.temp;
    var averageTemp = Math.round((+tempInfo.day + +tempInfo.night + +tempInfo.morn + +tempInfo.eve)/4);
    return (

      <Link to={'/forecast/' + this.props.city + '/' + dayOfTheWeek }>
        <div className='col-md-3' style={styles.flexElement}>
          <i className={iconClasses[weatherCondition]} style={styles.weatherIcon}></i>
          <span>{averageTemp}&deg;</span>
          <p>{date.toLocaleDateString()}</p>
        </div>
      </Link>
    )
  }
})

module.exports = DailyWeather;

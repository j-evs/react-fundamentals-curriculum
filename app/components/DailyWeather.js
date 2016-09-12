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
    var dateFormatted = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.${date.getMonth() < 9 ? '0'+ (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear()}`;
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

    var onMouseOverLink = 'rgba(192,192,192, 0.25)';
    var onMouseOverIcon = 'white';
    var onMouseOutLink = 'transparent';
    var onMouseOutIcon = 'silver';
    return (

      <Link
        style={styles.flexElement}
        to={'/forecast/' + this.props.city + '/' + dayOfTheWeek }
        onMouseOver={ function(e) {
          var link = e.currentTarget;
          link.style.background = onMouseOverLink;
          link.firstChild.firstChild.style.color = onMouseOverIcon;
        } }
        onMouseOut={ function(e) {
          var link = e.currentTarget;
          link.style.background = onMouseOutLink;
          link.firstChild.firstChild.style.color = onMouseOutIcon;
        } }
      >
        <div style={{margin: '10%'}}>
          <i className={iconClasses[weatherCondition]} style={styles.weatherIcon}></i>
          <span style={styles.temperature}>{averageTemp}&deg;</span>
          <p style={styles.date}>{dateFormatted}</p>
        </div>
      </Link>
    )
  }
})

module.exports = DailyWeather;

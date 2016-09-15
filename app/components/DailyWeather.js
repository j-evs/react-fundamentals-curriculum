var React = require('react');
var styles = require('../styles');
var weatherIconStyling = require('../weather-icons/css/weather-icons.min.css');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var DailyWeather = React.createClass({
  render: function() {
    var tempInfo = this.props.info.temp;
    var averageTemp = Math.round((+tempInfo.day + +tempInfo.night + +tempInfo.morn + +tempInfo.eve)/4);

    var onMouseOverLink = 'rgba(192,192,192, 0.25)';
    var onMouseOverIcon = 'white';
    var onMouseOutLink = 'transparent';
    var onMouseOutIcon = 'silver';
    return (
      <Link
        style={styles.flexElement}
        to={'/forecast/' + this.props.city + '/' + this.props.info.dayOfTheWeek }
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
          <i className={this.props.iconClasses[this.props.info.weatherCondition]} style={styles.weatherIcon}></i>
          <span style={styles.temperature}>{averageTemp}&deg;</span>
          <p style={styles.date}>{this.props.info.dateFormatted}</p>
        </div>
      </Link>
    )
  }
})

module.exports = DailyWeather;

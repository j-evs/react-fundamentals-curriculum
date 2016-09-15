var React = require('react');
var styles = require('../styles');

function DailyWeatherDetailed(props) {
    return (
      <div style={styles.flexContainerDetailed}>
        <p style={styles.weatherInfoDetailed}>{props.dateFormatted}</p>
        <i className={props.iconClasses[props.info.weatherCondition]} style={styles.weatherIconDetailed} ></i>
        <p style={styles.weatherInfoDetailed}>Morning: {Math.round(props.info.temp.morn)}&deg;</p>
        <p style={styles.weatherInfoDetailed}>Day: {Math.round(props.info.temp.day)}&deg;</p>
        <p style={styles.weatherInfoDetailed}>Evening: {Math.round(props.info.temp.eve)}&deg;</p>
        <p style={styles.weatherInfoDetailed}>Night: {Math.round(props.info.temp.night)}&deg;</p>
      </div>
    )
  };

module.exports = DailyWeatherDetailed;

var React = require('react');

var DailyWeatherDetailed = React.createClass({
  render: function() {
    var date = new Date(this.props.info.dt)
    return (
      <div>
        <pre>{JSON.stringify(this.props.info, null, ' ')}</pre>
        <p>{date.toLocaleDateString()}</p>
        <p></p>
        <p>Min temp: {this.props.info.temp.min}</p>
        <p>Max temp: {this.props.info.temp.max}</p>
        <p>{this.props.info.weather.description}</p>
      </div>
    )
  }
});

module.exports = DailyWeatherDetailed;

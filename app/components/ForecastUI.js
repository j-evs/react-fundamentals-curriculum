var React = require('react');
var DailyWeather = require('./DailyWeather');
var styles = require('../styles');

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}
var ForecastUI = React.createClass({
  dailyComponentRender: function() {
    this.props.weatherInfo.map(function(item) {
      console.log(item)
      return <DailyWeather key={item.dt} info={item}/>;
    });
  },
  render: function() {
    return (
      this.props.isLoading === true
      ? <p>LOADING</p>
      : <div>
          <h1 className='text-center'>{this.props.city}</h1>
          <div className='container-fluid'>
            <div style={styles.flexContainer}>
              {this.props.weatherInfo.map(function(item) {
                console.log(item)
                return <DailyWeather key={item.dt} info={item}/>;
              })}
            </div>
          </div>
      </div>
    )
  }
});

module.exports = ForecastUI;

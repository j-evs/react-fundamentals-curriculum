var React = require('react');
var ForecastUI = require('./ForecastUI');
var OpenWeatherHelper = require('../utils/OpenWeatherHelper');

var Forecast = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      weatherInfo: []
    }
  },
  componentDidMount: function() {
    var city = this.props.params.city
    //Fetch data for city using WeatherMap API
    console.log(city);
    OpenWeatherHelper.getWeatherInfo(city)
      .then(function(data) {
        this.setState({
          isLoading: false,
          weatherInfo: data.list
        })
      }.bind(this));
  },
  componentWillReceiveProps: function(newProps) {
    var city = newProps.params.city;
    console.log(city);
    OpenWeatherHelper.getWeatherInfo(city)
      .then(function(data) {
        this.setState({
          isLoading: false,
          weatherInfo: data.list
        })
      }.bind(this));
  },
  render: function() {
    return (
      <ForecastUI
        city={this.props.params.city}
        isLoading={this.state.isLoading}
        weatherInfo={this.state.weatherInfo} />
    )
  }
})

module.exports = Forecast;

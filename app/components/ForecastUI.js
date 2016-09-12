var React = require('react');
var DailyWeather = require('./DailyWeather');
var DailyWeatherDetailed = require('./DailyWeatherDetailed');
var styles = require('../styles');

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}
var ForecastUI = React.createClass({
  dailyComponentRender: function() {
    this.props.weatherInfo.map(function(item) {
      return <DailyWeather key={item.dt} info={item} city={this.props.city} />;
    });
  },
  render: function() {
    var city = this.props.city;
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    console.log(this.props.route.day);
    return (
      this.props.isLoading === true
      ? <p>LOADING</p>
      :  (this.props.route.day === undefined)
        ?
         <div>
            <h1 className='text-center' style={styles.cityHeader}>{this.props.city}</h1>
            <div className='container-fluid'>
              <div style={styles.flexContainer}>
                {this.props.weatherInfo.map(function(item) {
                  return <DailyWeather key={item.dt} info={item} city={city} />;
                })}
              </div>
            </div>
          </div>
        : <div>
           <h1 className='text-center' style={styles.cityHeader}>{this.props.city}</h1>
           <div className='container-fluid'>
             <div style={styles.flexContainer}>
               <DailyWeatherDetailed info={this.props.weatherInfo[week.indexOf(this.props.route.day)]} />
             </div>
           </div>
         </div>
    )
  }
});

module.exports = ForecastUI;

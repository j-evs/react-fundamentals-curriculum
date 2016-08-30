var React = require('react');
var styles = require('../styles');


var DailyWeather = React.createClass({
  render: function() {
    var date = new Date(this.props.info.dt * 1000);
    return (
      <div className='col-md-3' style={styles.flexElement}>
        <p>{date.toLocaleDateString()}</p>
        <p>{this.props.info.temp.day}</p>
      </div>
    )
  }
})

module.exports = DailyWeather;

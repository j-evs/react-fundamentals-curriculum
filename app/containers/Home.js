var React = require('react');
var CityInput = require('../components/CityInput');
var styles = require('../styles');

var Home = React.createClass({
  render: function() {
    return (
      <div style={styles.center} >
        <h1>Enter a city!</h1>
        <CityInput/>
      </div>
    )
  }
})

module.exports = Home;

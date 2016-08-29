var React = require('react');
var CityInput = require('../components/CityInput');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Enter a city!</h1>
        <CityInput/>
      </div>
    )
  }
})

module.exports = Home;

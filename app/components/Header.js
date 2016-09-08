var React = require('react');
var CityInput = require('./CityInput');
var styles = require('../styles');

var Header = React.createClass({
  render: function() {
    return (
      <div className='row'  style={styles.flexParent}>
        <div className='col-md-4'>
          <h1 style={styles.headerMotto}>SuperCool Weather App</h1>
        </div>
        <div className='col-md-4 col-md-offset-4'>
          <CityInput/>
        </div>
      </div>
    )
  }
})

module.exports = Header;

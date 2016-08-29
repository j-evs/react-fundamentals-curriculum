var React = require('react');
var CityInput = require('./CityInput');

var Header = React.createClass({
  render: function() {
    return (
      <div className='row bg-warning'>
        <div className='col-md-4'>
          <h1>SuperCool Weather App</h1>
        </div>
        <div className='col-md-4 col-md-offset-4'>
          <CityInput/>
        </div>
      </div>
    )
  }
})

module.exports = Header;

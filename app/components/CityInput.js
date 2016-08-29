var React = require('react');
var CityInputUI = require('./CityInputUI');

var CityInput = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      city: ''
    }
  },
  handleUpdateCity: function(e) {
    this.setState({
      city: e.target.value
    })
  },
  handleSubmitCity: function(e) {
    e.preventDefault();
    var city = this.state.city;
    this.setState({
      city: ''
    });
    this.context.router.push('/forecast/' + this.state.city)
  },
  render: function() {
    return (
      <CityInputUI
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}
        city={this.state.city}/>
    )
  }
})

module.exports = CityInput;

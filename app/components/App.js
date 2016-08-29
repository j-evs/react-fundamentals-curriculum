var React = require('react');
var Header = require('./Header');

var App = React.createClass({
  render: function() {
    return (
      <div className='container-fluid'>
        <Header/>
        {this.props.children}
      </div>
    )
  }
});

module.exports = App;

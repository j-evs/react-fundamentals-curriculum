var React = require('react');
var Header = require('./Header');
var styles = require('../styles');
var video = require('../video/rain.mp4');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div className='container-fluid' style={styles.alwaysOnTop}>
          <Header/>
          {this.props.children}
        </div>
        <video autoPlay loop muted style={styles.video}>
          <source src={video} type='video/mp4'/>
        </video>
      </div>
    )
  }
});

module.exports = App;

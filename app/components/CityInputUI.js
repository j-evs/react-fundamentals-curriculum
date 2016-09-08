var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function CityInputUI(props) {
  var onMouseOver = 'rgba(132, 76, 20, 0.6)';
  var onMouseOut = 'rgba(132, 76, 20, 0.2)';
  var inputHover = 'inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)';
  var inputOut = 'none';
  console.log(styles);
  return (
    <form onSubmit={props.onSubmitCity}>
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          onChange={props.onUpdateCity}
          value={props.city}
          placeholder='Moscow'
          style={styles.input}
          onMouseOver={ function(e) { e.target.style.boxShadow = inputHover; }}
          onMouseOut={ function(e) { e.target.style.boxShadow = inputOut; }}
        />
        <span className='input-group-btn'>
            <button
              className='btn btn-primary'
              type='submit'
              style={styles.button}
              onMouseOver={ function(e) { e.target.style.background = onMouseOver; }}
              onMouseOut={ function(e) { e.target.style.background = onMouseOut; }}
            >
              Get Weather
            </button>
        </span>
      </div>
    </form>
  )
};

CityInputUI.PropTypes = {
  city: PropTypes.string.isRequired,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired
}

module.exports = CityInputUI;

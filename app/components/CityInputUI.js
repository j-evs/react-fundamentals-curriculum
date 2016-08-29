var React = require('react');
var PropTypes = React.PropTypes;

function CityInputUI(props) {
  return (
    <form onSubmit={props.onSubmitCity}>
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          onChange={props.onUpdateCity}
          value={props.city}
          placeholder='Moscow'/>
        <span className='input-group-btn'>
            <button className='btn btn-success' type='submit'>
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

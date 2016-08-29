var React = require('react');

function ForecastUI(props) {
  return (
    props.isLoading === false
    ? <p>LOADING</p>
    : <div>Yay Forecast for {props.city} rendered!!!</div>
  )
}

module.exports = ForecastUI;

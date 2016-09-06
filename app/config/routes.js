var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('../components/App');
var Home = require('../containers/Home');
var Forecast = require('../components/Forecast');
var DailyWeatherDetailed = require('../components/DailyWeatherDetailed');

var routes = React.createClass({
  render: function() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='/forecast/:city' component={Forecast}/>
          <Route path='/forecast/:city/:day' component={Forecast}/>
        </Route>
      </Router>
    )
  }
})

module.exports = routes;

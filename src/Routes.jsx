var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Base = require('./components/Base.jsx');
var Home = require('./components/Home.jsx');
var About = require('./components/About.jsx');

var Routes = (
  <Router>
    <Route path="/" component={Base}>
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>
);

module.exports = Routes;

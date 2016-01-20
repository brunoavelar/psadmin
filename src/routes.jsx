"use strict";

var React = require('react');
var reactRouter = require('react-router');
var Router = reactRouter.Router;
var Route = reactRouter.Route;
var IndexRoute = reactRouter.IndexRoute;
var browserHistory = reactRouter.BrowserHistory;

var routes = (
    <Router history={browserHistory}>
        <Route name="app" path="/" component={require('./components/app.jsx')}>
            <IndexRoute component={require('./components/homePage.jsx')} />
            <Route name="authors" path="/authors" component={require('./components/authors/authorPage.jsx')} />
            <Route name="about" path="/about" component={require('./components/about/aboutPage.jsx')} />
        </Route>
    </Router>
    );

module.exports = routes;

"use strict";

var React = require('react');
var reactRouter = require('react-router');
var Router = reactRouter.Router;
var Route = reactRouter.Route;
var IndexRoute = reactRouter.IndexRoute;
var browserHistory = reactRouter.BrowserHistory;

var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={require('./components/app.jsx')}>
            <IndexRoute component={require('./components/homePage.jsx')} />
            <Route path="/authors" component={require('./components/authors/authorPage.jsx')} />
            <Route path="/about" component={require('./components/about/aboutPage.jsx')} />
        </Route>
    </Router>
    );

module.exports = routes;

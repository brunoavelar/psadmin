"use strict";

var React = require('react');
var reactRouter = require('react-router');
var Router = reactRouter.Router;
var Route = reactRouter.Route;
var IndexRoute = reactRouter.IndexRoute;
var Redirect = reactRouter.Redirect;
var browserHistory = reactRouter.BrowserHistory;

var app = require('./components/app.jsx');
var homePage = require('./components/homePage.jsx');
var authorsPage = require('./components/authors/authorsPage.jsx');
var manageAuthorPage = require('./components/authors/manageAuthorPage.jsx');
var aboutPage = require('./components/about/aboutPage.jsx');
var notFoundPage = require('./components/notFoundPage.jsx');

function logEnteringAbout(location, replaceWith){
	console.log('Entering about page')
}

function logLeavingAbout(){
	console.log('Leaving about page')
}

var routes = (
    <Router history={browserHistory}>
        <Route name="app" path="/" component={app}>
            <Route path="about" component={aboutPage} onEnter={logEnteringAbout} onLeave={logLeavingAbout} />

            <IndexRoute component={homePage} />

            <Route path="/authors" component={authorsPage} />
            <Route path="/author" component={manageAuthorPage} />
            <Route path="/author/:id" component={manageAuthorPage} />
			<Route path="/about" component={aboutPage} />

			<Redirect from="about-us" to="about" />
			<Redirect from="about/*" to="about" />
			<Route path="*" component={notFoundPage} />
        </Route>
    </Router>
    );

module.exports = routes;

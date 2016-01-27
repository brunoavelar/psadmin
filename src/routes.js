"use strict";

var React = require('react');
var reactRouter = require('react-router');
var Router = reactRouter.Router;
var Route = reactRouter.Route;
var IndexRoute = reactRouter.IndexRoute;
var Redirect = reactRouter.Redirect;
var browserHistory = reactRouter.BrowserHistory;

var app = require('./components/app');
var homePage = require('./components/homePage');
var authorsPage = require('./components/authors/authorsPage');
var manageAuthorPage = require('./components/authors/manageAuthorPage');
var aboutPage = require('./components/about/aboutPage');
var notFoundPage = require('./components/notFoundPage');

var coursesPage = require('./components/courses/coursesPage');

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

            <Route path="/courses" component={coursesPage} />

			<Route path="/about" component={aboutPage} />

			<Redirect from="about-us" to="about" />
			<Redirect from="about/*" to="about" />
			<Route path="*" component={notFoundPage} />
        </Route>
    </Router>
    );

module.exports = routes;

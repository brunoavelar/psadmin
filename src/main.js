"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./routes');
import InitializeActions from './components/flux/actions/initializeActions';

InitializeActions.initApp();

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));

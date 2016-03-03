"use strict";

var Dispatcher = require('../appDispatcher');
var ActionTypes = require('../../constants/actionTypes');
var AuthorApi = require('../../../api/authorApi');
var CourseApi = require('../../../api/courseApi');
import Routes from '../../../api/fakeServerEndpoints';
import FakeServer from '../../../api/fakeServer';

var setupServer = function(){
    var fakeServer = new FakeServer({autoRespondAfter: 80});

    Object.keys(Routes).forEach(function(key) {
        var value = Routes[key];
        fakeServer.addRoute(key, {
            url: value.url,
            method: value.method,
            handler: value.handler
        });
    });
};

var InitializeActions = {
    initApp: function(){
        setupServer();

        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors(),
                courses: CourseApi.getAllCourses()
            }
        });
    }
};

module.exports = InitializeActions;

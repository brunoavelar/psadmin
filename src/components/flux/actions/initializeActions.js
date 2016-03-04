var Dispatcher = require('../appDispatcher');
var ActionTypes = require('../../constants/actionTypes');
var CourseApi = require('../../../api/courseApi');

import AuthorApi from '../../../api/authorApi';
import Routes from '../../../api/fakeServerEndpoints';
import FakeServer from '../../../api/fakeServer';


class InitializeActions {
    _setupServer(){
        var fakeServer = new FakeServer({autoRespondAfter: 80});

        Object.keys(Routes).forEach(function(key) {
            var value = Routes[key];
            fakeServer.addRoute(key, {
                url: value.url,
                method: value.method,
                handler: value.handler
            });
        });
    }

    initApp(){
        this._setupServer();
        AuthorApi.getAllAuthors();

        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                courses: CourseApi.getAllCourses()
            }
        });
    }
}

export default new InitializeActions();

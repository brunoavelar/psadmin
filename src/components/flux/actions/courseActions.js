"use strict";

var Dispatcher = require('../appDispatcher');
var CourseApi = require('../../../api/courseApi');
var ActionTypes = require('../../constants/actionTypes');

var CourseActions = {
    createCourse: function(course){
        var newCourse = CourseApi.saveCourse(course);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_COURSE,
            course: newCourse
        });
    }
};

module.exports = CourseActions;

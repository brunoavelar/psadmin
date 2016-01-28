"use strict";

var Dispatcher = require('../appDispatcher');
var CourseApi = require('../../../api/courseApi');
var AuthorApi = require('../../../api/authorApi');
var ActionTypes = require('../../constants/actionTypes');

var CourseActions = {
    createCourse: function(course){
        var selectedAuthor = AuthorApi.getAuthorById(course.author);
        course.author = { id: selectedAuthor.id, name: selectedAuthor.firstName +' '+ selectedAuthor.lastName };
        var newCourse = CourseApi.saveCourse(course);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_COURSE,
            course: newCourse
        });
    }
};

module.exports = CourseActions;

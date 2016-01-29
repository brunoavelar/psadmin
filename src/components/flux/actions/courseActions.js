"use strict";

var Dispatcher = require('../appDispatcher');
var CourseApi = require('../../../api/courseApi');
var AuthorApi = require('../../../api/authorApi');
var ActionTypes = require('../../constants/actionTypes');

var getCourseActorById = function(authorId){
    var selectedAuthor = AuthorApi.getAuthorById(authorId);
    var courseAuthor = { id: selectedAuthor.id, name: selectedAuthor.firstName +' '+ selectedAuthor.lastName };

    return courseAuthor;
};

var CourseActions = {
    createCourse: function(course){
        course.author = getCourseActorById(course.author.id);
        var newCourse = CourseApi.saveCourse(course);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_COURSE,
            course: newCourse
        });
    },

    updateCourse: function(course){
        course.author = getCourseActorById(course.author);
        var updatedCourse = CourseApi.saveCourse(course);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_COURSE,
            course: updatedCourse
        })
    }
};

module.exports = CourseActions;

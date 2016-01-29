"use strict";

var Dispatcher = require('../appDispatcher');
var ActionTypes = require('../../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var courses = [];

var CourseStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },

    getAllCourses: function(){
        return courses;
    },

    getCourseById: function(id){
        var course = _.find(courses, {id: id});
        return course;
    }
});

Dispatcher.register(function(action){
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            courses = action.initialData.courses;
            CourseStore.emitChange();
            break;
        case ActionTypes.CREATE_COURSE:
            courses.push(action.course);
            CourseStore.emitChange();
            break;
        default:

    }
});

module.exports = CourseStore;

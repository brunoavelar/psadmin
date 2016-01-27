var React = require('react');
var History = require('react-router').History;
var Lifecycle = require('react-router').Lifecycle;
var CourseForm = require('./courseForm');
var CourseActions = require('../flux/actions/courseActions');
var AutorStore = require('../flux/stores/authorStore');
var toastr = require('toastr');

var ManageCourse = React.createClass({
    displayName: 'Manage course page',
    isDirty: false,

    mixins: [ History, Lifecycle ],

    routerWillLeave: function(nextLocation){
        if (this.isDirty){
            return 'Your work is not saved! Are you sure you want to leave?'
        }
    },

    getInitialState: function() {
        return {
            course: {title: '', author: {}, category: '', length: ''},
            authors: AutorStore.getAllAuthors(),
            errors: {}
        };
    },

    courseFormIsValid: function() {
        return true;
    },

    saveCourse: function(event){
        event.preventDefault();

        if(!this.courseFormIsValid()){
            return;
        }

        if(this.state.course.id){
            //CourseActions.updateCourse(this.state.course);
        }else{
            CourseActions.createCourse(this.state.course);
        }

        this.isDirty = false;
        toastr.success('Course saved.');
        this.history.pushState(null, 'courses');
    },

    setCourseState: function(event){
        this.isDirty = true;
        var field = event.target.name;
		var value = event.target.value;
        var course = this.state.course;
        course[field] = value;

		return this.setState({ course: course });
	},

    render: function() {
        return (
            <CourseForm
                course={this.state.course}
                authors={this.state.authors}
                onChange={this.setCourseState}
                onSave={this.saveCourse}
                errors={this.state.errors}
            />
            );
    }

});

module.exports = ManageCourse;

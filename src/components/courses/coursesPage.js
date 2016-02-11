var React = require('react');
var Link = require('react-router').Link;
var CourseStore = require('../flux/stores/courseStore');
var CourseList = require('./courseList');

var CoursesPage = React.createClass({
    getInitialState: function() {
        return {
            courses: CourseStore.getAllCourses()
        };
    },
    componentWillMount: function() {
        CourseStore.addChangeListener(this.onChange);
    },

    componentWillUnmount: function() {
        CourseStore.removeChangeListener(this.onChange);
    },

    onChange: function() {
        this.setState({ courses: CourseStore.getAllCourses() });
    },


    render: function() {
        return (
            <div>
                <h1>Courses</h1>
                <Link to="course" className="btn btn-default">Add course</Link>
                <CourseList
                    courses={this.state.courses}
                />
            </div>
        );
    }

});

    module.exports = CoursesPage;

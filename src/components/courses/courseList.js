var React = require('react');
var PropTypes = React.PropTypes;

var CourseList = React.createClass({
    propTypes: {
        courses: React.PropTypes.any.isRequired
    },

    render: function() {
        var createCourseRow = function(course){
            return(
                <tr key={course.id}>
                    <td>Watch</td>
                    <td>Delete</td>
                    <td>{course.title}</td>
                    <td>{course.author.name}</td>
                    <td>{course.category}</td>
                    <td>{course.length}</td>
                </tr>
            );
        };
        return (
            <div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Length</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.courses.map(createCourseRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }

});

module.exports = CourseList;

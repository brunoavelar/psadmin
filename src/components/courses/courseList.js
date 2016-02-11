var React = require('react');
var Link = require('react-router').Link;

var CourseList = React.createClass({
    propTypes: {
        courses: React.PropTypes.any.isRequired,
        onDelete: React.PropTypes.func.isRequired
    },

    deleteHandler: function(id, event){
        this.props.onDelete(id, event);
    },

    render: function() {
        var createCourseRow = function(course){
            return(
                <tr key={course.id}>
                    <td>Watch</td>
                    <td>
                        <a href="#" id={course.id} onClick={this.deleteHandler.bind(this, course.id)}>Delete</a>
                    </td>
                    <td><Link to={`/course/${course.id}`}> {course.title}</Link></td>
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

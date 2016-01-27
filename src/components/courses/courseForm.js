var React = require('react');
var TextInput = require('../common/textInput');
var Dropdown = require('../common/dropdown');

var CourseForm = React.createClass({
    displayName: "Course form",

    propTypes:{
        course: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function() {
        return (
            <form>
                <h1>Manage Course</h1>
                <TextInput name="title" label="Title"
                    value={this.props.course.title}
                    onChange={this.props.onChange}
                />

                <Dropdown name="author" label="Author"
                    values={this.props.authors}
                    selected={this.props.course.author}
                    onChange={this.props.onChange}
                />

                <TextInput name="category" label="Category"
                    value={this.props.course.category}
                    onChange={this.props.onChange}
                />

                <TextInput name="length" label="Length"
                    value={this.props.course.length}
                    onChange={this.props.onChange}
                />

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );
    }

});

module.exports = CourseForm;

var React = require('react');
var _ = require('lodash');

var TextInput = React.createClass({
    displayName: "Dropdown",

	propTypes: {
		error: React.PropTypes.string,
		label: React.PropTypes.string.isRequired,
		name: React.PropTypes.string.isRequired,
		onChange: React.PropTypes.func.isRequired,
		values: React.PropTypes.array.isRequired
	},

    onChange: function(event){
        var selectedAuthor = {};
        selectedAuthor.id = event.target.options[event.target.selectedIndex].value;
        selectedAuthor.name = event.target.options[event.target.selectedIndex].text;

        var newEvent = { target: {name: 'author', value: selectedAuthor} };
        this.props.onChange(newEvent);
    },

	render: function() {
		var wrapperClass = "form-group";
		if(this.props.error && this.props.error.length > 0){
			wrapperClass += " " + "has-error";
		}

        var createOption = function(value){
            return(
                <option key={value.id} value={value.id}>{value.firstName +' '+ value.lastName}</option>
            );
        };

		return (
			<div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">

                    <select
                        id={this.props.name}
                        className="form-control"
                        name={this.props.name}
                        onChange={this.onChange}
                        ref={this.props.name}
                        defaultValue={this.props.selected}
                    >
                        <option hidden>Select</option>
                        {this.props.values.map(createOption, this)}
                    </select>
				<div className="input">{this.props.error}</div>
				</div>
			</div>
		);
	}

});

module.exports = TextInput;

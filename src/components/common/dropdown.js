var React = require('react');

var TextInput = React.createClass({
    displayName: "Dropdown",

	propTypes: {
		error: React.PropTypes.string,
		label: React.PropTypes.string.isRequired,
		name: React.PropTypes.string.isRequired,
		onChange: React.PropTypes.func.isRequired,
		values: React.PropTypes.array.isRequired,
        selected: React.PropTypes.object
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
        }

		return (
			<div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <select
                        className="form-control"
                        name={this.props.name}
                        onChange={this.props.onChange}
                        ref={this.props.name}
                    >
                        {this.props.values.map(createOption, this)}
                    </select>
				<div className="input">{this.props.error}</div>
				</div>
			</div>
		);
	}

});

module.exports = TextInput;

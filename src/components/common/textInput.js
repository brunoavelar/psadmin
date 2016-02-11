var React = require('react');

var TextInput = React.createClass({
    displayName: "Text Input",

	propTypes: {
		error: React.PropTypes.string,
		label: React.PropTypes.string.isRequired,
		name: React.PropTypes.string.isRequired,
		onChange: React.PropTypes.func.isRequired,
		placeholder: React.PropTypes.string,
		value: React.PropTypes.string
	},

	render: function() {
		var wrapperClass = "form-group";
		if(this.props.error && this.props.error.length > 0){
			wrapperClass += " " + "has-error";
		}

		return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <input
                        className="form-control"
                        name={this.props.name}
                        onChange={this.props.onChange}
                        placeholder={this.props.placeholder}
                        ref={this.props.name}
                        type="text"
                        value={this.props.value}
                    />
				<div className="input">{this.props.error}</div>
				</div>
			</div>
		);
	}

});

module.exports = TextInput;

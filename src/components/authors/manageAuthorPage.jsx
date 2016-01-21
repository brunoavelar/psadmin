var React = require('react');
var AuthorForm = require('./authorForm.jsx');

var manageAuthorPage = React.createClass({
	displayName: "manage Author Page",
	getInitialState: function(){
		return{
			author: { id: '', firstName: '', lastName: '' }
		}
	},
	setAuthorState: function(event){
		var field = event.target.name;
		var value = event.target.value;
		this.setState({ "author[field]": value })


		return this.setState({ author: this.state.author });
	},
	render: function() {
		return (
			<AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
			/>
			);
	}

});

module.exports = manageAuthorPage;

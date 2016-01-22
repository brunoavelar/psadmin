var React = require('react');
var AuthorForm = require('./authorForm.jsx');
var AuthorApi = require('../../api/authorApi')
var History = require('react-router').History;
var toastr = require('toastr');

var manageAuthorPage = React.createClass({
	displayName: "manage Author Page",
    mixins: [ History ],

	getInitialState: function(){
		return{
			author: { id: '', firstName: '', lastName: '' },
            errors: {}
		}
	},
	setAuthorState: function(event){
		var field = event.target.name;
		var value = event.target.value;
        this.state.author[field] = value;

		return this.setState({ author: this.state.author });
	},

    authorFormIsValid: function(){
        var isValid = true;
        this.state.errors = {};

        if(this.state.author.firstName.length < 3){
            this.state.errors.firstName = "First name must be at least 3 characters.";
            isValid = false;
        }

        if(this.state.author.lastName.length < 3){
            this.state.errors.lastName = "Last name must be at least 3 characters.";
            isValid = false;
        }

        this.setState({ errors: this.state.errors });
        return isValid;
    },

    saveAuthor: function(event){
        event.preventDefault();

        if(!this.authorFormIsValid()){
            return;
        }

        AuthorApi.saveAuthor(this.state.author);
        toastr.success('Author saved.')
        this.history.pushState(null, 'authors');
    },

	render: function() {
		return (
			<AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
                errors={this.state.errors}
			/>
		);
	}

});

module.exports = manageAuthorPage;

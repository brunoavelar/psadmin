var React = require('react');
var AuthorForm = require('./authorForm.jsx');
var AuthorApi = require('../../api/authorApi')
var History = require('react-router').History;
var Lifecycle = require('react-router').Lifecycle;
var toastr = require('toastr');

var manageAuthorPage = React.createClass({
	displayName: "manage Author Page",
    mixins: [ History, Lifecycle ],

    isDirty: false,

    routerWillLeave: function(nextLocation) {
        if (this.isDirty){
            return 'Your work is not saved! Are you sure you want to leave?'
        }
    },

	getInitialState: function(){
		return{
			author: { id: '', firstName: '', lastName: '' },
            errors: {}
		}
	},

    componentWillMount: function() {
        var authorId = this.props.params.id;

        if(authorId){
            this.setState({author: AuthorApi.getAuthorById(authorId)});
        }
    },

	setAuthorState: function(event){
        this.isDirty = true;
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
        this.isDirty = false;
        toastr.success('Author saved.');
        this.history.pushState(null, 'authors');
    },

	render: function() {
		return (
            <div>
                <AuthorForm
                    author={this.state.author}
                    onChange={this.setAuthorState}
                    onSave={this.saveAuthor}
                    errors={this.state.errors}
                />
            New State: {this.state.isSaved}
            </div>
        );
	}

});

module.exports = manageAuthorPage;

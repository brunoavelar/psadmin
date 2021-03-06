var React = require('react');
var AuthorForm = require('./authorForm');
var History = require('react-router').History;
var Lifecycle = require('react-router').Lifecycle;
var toastr = require('toastr');

import AuthorStore from '../flux/stores/authorStore';
import AuthorActions from '../flux/actions/authorActions';

var manageAuthorPage = React.createClass({
    displayName: "Manage Author Page",
    mixins: [ History, Lifecycle ],

    isDirty: false,

    routerWillLeave: function(nextLocation) {
        if (this.isDirty){
            return 'Your work is not saved! Are you sure you want to leave?';
        }
    },

    getInitialState: function(){
        return {
            author: { id: '', firstName: '', lastName: '' },
            errors: {}
        };
    },

    componentWillMount: function() {
        var authorId = this.props.params.id;

        if(authorId){
            this.setState({author: AuthorStore.getAuthorById(authorId)});
        }
    },

    setAuthorState: function(event){
        this.isDirty = true;
        var field = event.target.name;
        var value = event.target.value;
        var author = this.state.author;
        author[field] = value;
        return this.setState({ author: this.state.author });
    },

    authorFormIsValid: function(){
        var isValid = true;
        var erros = this.state.errors;

        if(this.state.author.firstName.length < 3){
            erros.firstName = "First name must be at least 3 characters.";
            isValid = false;
        }

        if(this.state.author.lastName.length < 3){
            erros.lastName = "Last name must be at least 3 characters.";
            isValid = false;
        }

        this.setState({ errors: erros });
        return isValid;
    },

    saveAuthor: function(event){
        event.preventDefault();

        if(!this.authorFormIsValid()){
            return;
        }

        if(this.state.author.id){
            AuthorActions.updateAuthor(this.state.author);
        }else{
            AuthorActions.createAuthor(this.state.author);
        }

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

            </div>
        );
    }

});

module.exports = manageAuthorPage;

"use strict";

var React = require('react');
var AuthorActions = require('../flux/actions/authorActions');
var AuthorStore = require('../flux/stores/authorStore');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;

var AuthorsPage = React.createClass({
    displayName: "Authors page",
    getInitialState: function(){
        return{
            authors: AuthorStore.getAllAuthors()
        }
    },

    render: function() {
        return (
            <div>
                <h1>Authors</h1>
				<Link to="author" className="btn btn-default">Add author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }

});

module.exports = AuthorsPage;

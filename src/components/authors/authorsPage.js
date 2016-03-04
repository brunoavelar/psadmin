"use strict";

var React = require('react');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;

import AuthorStore from '../flux/stores/authorStore';

var AuthorsPage = React.createClass({
    displayName: "Authors page",
    getInitialState: function(){
        return{
            authors: []
        };
    },

    componentWillMount: function() {
        AuthorStore.addChangeListener(this.onChange);
    },

    componentWillUnmount: function() {
        AuthorStore.removeChangeListener(this.onChange);
    },

    onChange: function(){
        this.setState({ authors: AuthorStore.getAllAuthors() });
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

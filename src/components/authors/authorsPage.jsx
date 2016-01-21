"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList.jsx');
var Link = require('react-router').Link;

var AuthorsPage = React.createClass({
    displayName: "Authors page",
    getInitialState: function(){
        return{
            authors: []
        };
    },

    componentDidMount: function(){
        this.setState({ authors: AuthorApi.getAllAuthors() });
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

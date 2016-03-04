"use strict";

var React = require('react');
var Link = require('react-router').Link;
var toastr = require('toastr');

import AuthorActions from '../flux/actions/authorActions';

var AuthorList = React.createClass({
    propTypes: {
        authors: React.PropTypes.any.isRequired
    },

    deleteAuthor: function(id, event){
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('Author deleted');
    },

    render: function() {
        var createAuthorRow = function(author){
            return(
                <tr key={author.id}>
                    <td>
                        <a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a>
                    </td>
                    <td>
                        <Link to={`/author/${author.id}`}>{author.id}</Link>
                    </td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>

			);
    }

});

module.exports = AuthorList;

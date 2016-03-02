"use strict";

var React = require('react');
var IndexLink = require('react-router').IndexLink;

var NotFoundPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Woops! Sorry, there is nothing to see here.</p>
                <p>
                    <IndexLink to="/">Back to home</IndexLink>
                </p>
            </div>
        );
    }

});

module.exports = NotFoundPage;

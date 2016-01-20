var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;

var Header = React.createClass({

    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <IndexLink to="/" className="navbar-brand">
                        <img src="images/pluralsight-logo.png" />
                    </IndexLink>
                    <ul className="nav navbar-nav">
                        <li><IndexLink to="/">Home</IndexLink></li>
                        <li><Link to="authors">Authors</Link></li>
                        <li><Link to="about">About</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }

});

module.exports = Header;

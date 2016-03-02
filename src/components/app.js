
var React = require('react');
var Header = require('./common/header');
var reactRouter = require('react-router');
var Router = reactRouter.Router;
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function(){
        return (
            <div>
                <Header />
                <div className="container-fluid">
				{this.props.children}
                </div>
            </div>
			);
    }
});

module.exports = App;

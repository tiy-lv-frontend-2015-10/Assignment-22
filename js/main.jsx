var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var LikeButton = require('./components/likeButton.jsx');

/*var Router = Backbone.Router.extend({
	initialize: function() {
		Backbone.history.start({pushState: true});
	},
	routes: {
		"":'index',
	},
	index: function() {
		var likeButton = Backbone.Model.extend ({

		});
		//var router = new Router();
		//ReactDOM.render(<LikeButton model={model} router={this}/>, document.getElementById('container'));
	}
});*/

ReactDOM.render(<LikeButton />, document.getElementById('button'));
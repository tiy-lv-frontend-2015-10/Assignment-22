var React = require('react');
var ReactDOM = require('react-dom');
require('../../main.css');

var LikeButton = React.createClass({
	getInitialState: function() {
		return {liked: false};
		return {clicks: 0};
	},
	handleClick: function(e) {
		this.setState({liked: !this.state.liked});
		this.setState({clicks: !this.state.clicks});
	},	
	render: function(e) {
		var text = this.state.liked ? 'Liked' : 'Like';
		if (this.clicks = true) {
			clicks = this.clicks + 5;
		} else {
			clicks = this.clicks - 1;
		}
		return (
			<button className="likeBtn" onClick={this.handleClick}>{text + " " + clicks}</button>
			);
	},
});

module.exports = LikeButton;
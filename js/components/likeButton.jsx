var React = require('react');
var ReactDOM = require('react-dom');
require('../../main.css');

var LikeButton = React.createClass({
	getInitialState: function() {
		return {liked: false};
	},
	handleClick: function(e) {
		this.setState({liked: !this.state.liked});
	},
	render: function() {
		var text = this.state.liked ? 'like' : 'not liked';
		return (
			<button onClick={this.handleClick}>{text}</button>
			);
	},
});

ReactDOM.render(
	<LikeButton />,
	document.getElementById('button')
	);


module.exports = LikeButton;
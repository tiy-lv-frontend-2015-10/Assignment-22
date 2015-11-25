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

handler
this.setState({clicks: ""});
		this.clicks = + 1;

counter: this.state.counter + 1;

{this.clicks ? clicks ++ : false}

var count = this.state.liked ? counter + 1 : counter - 1;
clicks = this.state.liked ? clicks + 1  : clicks - 1;

if(this.liked = true) {
			this.clicks ++;
		}

render
var text = this.state.liked ? 'Liked' : 'Like';
var clicks = this.state.liked ? clicks ++ : "";

click: function(e) {
		{clicks ? clicks + 1 : ""};
	},
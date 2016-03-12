var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
	getInitialState: function(){
		return {
			likeCount: 0
		}
	},
	punchIt: function(e) {
		e.preventDefault();
		this.setState({likeCount: this.state.likeCount + 1 });


	},
	render: function() {
		var text = " Likes";
		if (this.state.likeCount === 1) {
			text = " Like";
			}
				return (
					<div id="center">
						<h4>What do you think of this article?</h4>
						<div id="buttonHole">
						<button id="likeMe" onClick={this.punchIt}>{this.state.likeCount + text}</button>
						</div>
					</div>
				)
	}
});

module.exports = Button;

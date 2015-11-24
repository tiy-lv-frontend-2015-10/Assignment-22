 var React = require ('react');
 var ReactDOM = require ('React-dom');
 var Backbone = require ('backbone');

var LikeBtn = React.createClass({
	render: function () {
		return(
		<div>
			<button>the</button>
		</div>
		)
	}
});

ReactDOM.render(<LikeBtn />, document.getElementById('LikeBtn'));

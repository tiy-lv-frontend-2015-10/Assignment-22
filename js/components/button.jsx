var React = require('react');
var ReactDOM = require('react-dom');

var LikeButton = React.createClass({
	getInitialState: function(){
		return {
			counter:this.props.counter,
			like: 'likes'
		}
	},
	_count: function(e){
		counter=this.props.counter;
		this.setState({
			counter:this.state.counter+=1
		});
		if(this.state.counter===1){
			this.setState({
				like: 'like'
			})
		} else {
			this.setState({
				like: 'likes'
			})
		}
		
		


		
	},
	render:function(){
		return(<button onClick={this._count}><span id="number">{this.state.counter}</span><span id="like">{this.state.like}</span></button>)
	}
}); 

module.exports = LikeButton;


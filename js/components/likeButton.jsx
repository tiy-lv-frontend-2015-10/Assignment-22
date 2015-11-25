var React = require('react');
var ReactDOM = require('react-dom');

var LikeButton = React.createClass({
  countUp: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  getInitialState: function(){
     return {
       count: 0
     }
  },
    render: function (){
    	var like = " likes"
    	if(this.state.count === 1){
    	like = " like";
    }
        return (
        <button type="button" onClick={this.countUp}>{this.state.count + like}</button>
        )
    }
});

module.exports=LikeButton;
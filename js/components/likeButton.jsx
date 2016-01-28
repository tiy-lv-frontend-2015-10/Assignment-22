//Creating a button that can be pressed and get likes

var React = require('react');
var ReactDOM = require('react-dom');

var LikeButton = React.createClass({
  upDank: function() {
    this.setState({
      count: this.state.count + 1
    });
  },

  getInitialState: function() {
    return {
      count: 0
    }
  },
  render: function() {
    var upDank = " Likes"
    if(this.state.count === 1) {
      upDank = " Like"
    }
    return (
      <button id="button" type = "button" onClick={this.upDank}> {this.state.count + upDank}</button>
    )
  }
});

module.exports=LikeButton;
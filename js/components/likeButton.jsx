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
    return (
      <button id="button" type = "button" onClick={this.upDank}> {this.state.count} Likes</button>
    )
  }
});

module.exports=LikeButton;
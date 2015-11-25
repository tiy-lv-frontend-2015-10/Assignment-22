var React = require('react');
var ReactDOM = require('react-dom');

var LikeButton = React.createClass({
  _Click: function() {
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
    var like = " like"
    if(this.state.count === 1) {
      like = " like"
    }
    return (
      <button id="button"  onClick={this._Click}> {this.state.count + like}</button>
    )
  }
});

module.exports=LikeButton;
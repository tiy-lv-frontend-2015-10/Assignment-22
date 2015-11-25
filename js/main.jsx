require("../css/main.css");
var Backbone = require ('backbone');
var React = require ('react');
var ReactDOM = require ('react-dom');	

var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  _handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'not liked';
    return (
      <button id="likeButton" onClick={this._handleClick} />
    );
  }
});

ReactDOM.render(
  <LikeButton />,
  document.getElementById('container')
);
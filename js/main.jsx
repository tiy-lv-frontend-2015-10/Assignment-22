var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var LikeButton = require('./components/likeButton.jsx');
require("../css/main.css");

// $(document).ready(function(){
  //var Router = require('./router.jsx');
ReactDOM.render(<LikeButton />, document.getElementById('container'));
// });
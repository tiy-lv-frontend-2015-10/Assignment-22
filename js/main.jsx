var React = require('react');
var ReactDOM = require('react-dom');
var backbone= require('backbone');
require("../main.css"); 
var LikeButton = require("../js/button.jsx");


ReactDOM.render(<LikeButton />, document.getElementById('likeButton'));
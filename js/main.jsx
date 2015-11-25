var React = require('react');
var ReactDOM = require('react-dom');
var LikeButton = require('./components/button.jsx');

var counter=0;
ReactDOM.render(<LikeButton counter={counter}/>,document.getElementById('container'));

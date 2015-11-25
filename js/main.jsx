require("../css/main.css");
var Backbone = require ('backbone');
var React = require ('react');
var ReactDOM = require ('react-dom');
var Counter = require ('./components/likes.jsx');

ReactDOM.render(<Counter />, document.getElementById('container'));
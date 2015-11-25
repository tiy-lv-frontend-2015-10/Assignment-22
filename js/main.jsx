var React = require('react');
var ReactDOM = require('react-dom');
var LikeButton = require('./components/button.jsx');
var ButtonStyle =require('../main.css');
var Backbone = require('backbone');
var BackboneParse = require('../backbone-parse.js');

var BackboneModel = Backbone.Model.extend({
	initialize: function(){
		console.log("a new Model has been created");
	},
	_parse_class_name: 'number'
});

var Collection = Backbone.Collection.extend({

	model: BackboneModel,
	_parse_class_name: 'number'
})


var test = new Collection();

test.fetch({
	success:function(resp) {
		
		dataObj= {data:resp.toJSON()};
		console.log(dataObj);
	},
	error:function(err) {
		console.log(err);
	}
});

var counter=0;
ReactDOM.render(<LikeButton counter={counter}/>,document.getElementById('container'));




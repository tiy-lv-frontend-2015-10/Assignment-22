var React = require ('react');
var ReactDOM = require ('react-dom');

var Counter = React.createClass({
  getInitialState: function(){
    return {
      counter: 0
    }
  },
  _handleClick: function(e){
    this.setState({
      counter: this.state.counter + 1
    });
  },
  render: function(){
    var like = " likes"
    if(this.state.counter === 1){
      like = " like";
    }
      return (
        <button type="button" id="likeButton" onClick={this._handleClick}>{this.state.counter + like}</button>
    );
  }
});
module.exports = Counter;

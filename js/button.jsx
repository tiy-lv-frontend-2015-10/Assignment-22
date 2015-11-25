var React = require('react');
var ReactDOM = require("react-dom");

var LikeButton = React.createClass({
  plus: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  getInitialState: function(){
     return {
       count: 0
     }
  },
  render: function() {
    var like = "likes"
    if(this.state.count === 1) {
      like = " like";
    }
    return (
      <button type="button" onClick={this.plus}>{this.state.count + " like"}</button>
      )
  }
});

module.exports = LikeButton;

//   render: function(){
//     <div>
//     if (this.state.count = 1) {
//       return (
//         <div id="button">
//           <button type="Button" onClick={this.state.plus}>{this.state.count} + " Like"</button>
//         </div>
//     } else
//     { 
//       return (
//         <div id="button">
//           <button type="Button" onClick={this.state.count}>{this.state.count} + " Likes"</button>
//         </div>
//     })
//       </div>
//     );
//   }
// });
var React = require("react");
var R = React.DOM;
var ReactDOM = require("react-dom");

var myComponentClass = React.createClass({
  render: function() {
    return R.h1(
      null,
      "Spotify Playlist App"
    )
  }
});

var myComponent = React.createElement(myComponentClass);
ReactDOM.render(myComponent, document.getElementById("entry-point"));

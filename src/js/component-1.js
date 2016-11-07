var React = require("react");
var R = React.Dom;
var ReactDOM = require("react-dom");

var myComponentClass = React.createClass({
  render: function() {
    return R.h1("Spotify Playlist App")
  }
});

var myComponent = React.CreateComponent(myComponentClass);
ReactDOM.render(myComponent, document.getElementById("entry-point"));

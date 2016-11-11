var React = require('react');
var R = React.DOM;
var ReactDOM = require('react-dom');

var myComponentClass = React.createClass({
  render: function() {
    return R.h1(
      null,
      'Spotify Playlist App'
    )
  }
});

var myOtherClass = React.createClass({
  render: function() {
    return R.h1(null, 'This is some more text');
  }
});

var myComponent = React.createElement(myComponentClass);
var myOtherComponent = React.createElement(myOtherClass);

ReactDOM.render(myComponent, document.getElementById('entry-point'));
ReactDOM.render(myOtherComponent, document.getElementById('secondary-entry'));



if(module.hot) {
  module.hot.accept();
}

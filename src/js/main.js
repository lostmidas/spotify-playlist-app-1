var React = require('react');
var ReactDOM = require('react-dom');
var App = React.createFactory(require('./app.js'));

ReactDOM.render(
  App({title: 'bitches'}),
  document.getElementById('entry-point')
);

if(module.hot) {
  module.hot.accept();
}

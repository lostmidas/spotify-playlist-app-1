var React = require('react');
var R = React.DOM;
var rp = require('request-promise');

module.exports = React.createClass({
  render: function() {
    return R.div(
      null,
      R.h1(null, 'Welcome to SpinSpin'),
      R.button({
        onClick: this.login
      }, 'Login')
    );
  },

  login: function() {
    rp({
      url: 'http://localhost:3000/auth',
      method: 'GET',
    })
      .then(function(data) {
        console.log(data);
        window.location = data;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});

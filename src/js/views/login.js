var React = require('react');
var R = React.DOM;
var rp = require('request-promise');

module.exports = React.createClass({
  render: function() {
    return R.div(
      null,
      R.div(null, 'SpinSpin'),
      R.button({
        type: 'submit',
        onClick: this.login
      }, 'Login to Spotify')
    );
  },

  login: function() {
    rp({
      url: 'http://localhost:3000/auth',
      method: 'GET'
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

var React = require('react');
var songInput = React.createFactory(require('./views/song-input.js'));
var playlistDisplay = React.createFactory(require('./views/playlist-display.js'));
var login = React.createFactory(require('./views/login'));
var R = React.DOM;

module.exports = React.createClass({
  render: function() {
    return R.div(
      null,
      this.props.title,
      songInput(),
      playlistDisplay(),
      login()
    );
  }
});

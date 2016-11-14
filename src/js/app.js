var React = require('react');
var songInput = React.createFactory(require('./song-input.js'));
var playlistDisplay = React.createFactory(require('./playlist-display.js'));
var R = React.DOM;

module.exports = React.createClass({
  render: function() {
    return R.div(
      null,
      this.props.title,
      songInput(),
      playlistDisplay()
    );
  }
});

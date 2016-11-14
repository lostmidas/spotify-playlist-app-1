var React = require('react');
var R = React.DOM;

module.exports = React.createClass({
  render: function() {
    var styles = {
      display: 'block',
      width: '100%',
      height: '25px',
      fontType: 'futura'
    };

    return R.div(
      null,
      R.input({
        style: styles,
        placeholder: 'Enter Song',
        onChange: this.updateInputData,
        ref: 'playlistInput'
      }),

      R.button({
        type: 'submit',
        onClick: this.submit
      }, 'Submit')
    );
  },
  submit: function() {
    var data = this.state.inputValue;
    var request = new Request({
      method: 'POST',
      url: 'http://localhost:3000/submit',
      body: data,
      headers: new Headers({
        'Content-Type': 'application-json'
      })
    });
    request = JSON.stringify(request);
    fetch(request);
    // .then(function(res) {
    //   // console.log('client side data -->', res);
    // });
  },
  updateInputData: function() {
    var value = this.refs.playlistInput.value;
    this.setState({inputValue: value});
  }
});

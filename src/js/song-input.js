var React = require('react');
var R = React.DOM;
var Request = require('request-promise');

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
    var data = {input: this.state.inputValue};

    Request({
      method: 'POST',
      url: 'http://localhost:3000/submit',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function(data){
      console.log('client data -->', data);
    })
    .catch(function(err) {
      console.log('client error -->', err);
    })
  },

  updateInputData: function() {
    var value = this.refs.playlistInput.value;
    this.setState({inputValue: value});
  }
});

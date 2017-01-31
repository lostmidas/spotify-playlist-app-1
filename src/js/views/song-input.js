var React = require('react');
var Request = require('request-promise');
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
      /* eslint-disable no-console */
      console.log('client data -->', data);
    })
    .catch(function(err) {
      console.log('client error -->', err);
      /* eslint-enable no-console */
    });
  },

  updateInputData: function() {
    var value = this.refs.playlistInput.value;
    this.setState({inputValue: value});
  }
});

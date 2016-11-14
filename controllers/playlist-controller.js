



function handleInput(req, res) {
  console.log('server side -->', req.body);
  res.send(req.body)
}














module.exports = {
  handleInput: handleInput
}

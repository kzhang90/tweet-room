var express = require('express');
var validator = require('validator');

var router = express.Router();


router.post('/', function (req, res) {
  var _validateInput = validateInput(req.body),
      errors = _validateInput.errors,
      isValid = _validateInput.isValid;

  if (!isValid) {
    res.status(400).json(errors);
  }
});

module.exports = router;


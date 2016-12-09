var express = require('express');
var validator = require('validator');
var _ = require('lodash');

var router = express.Router();

function validateInput(data) {
  var errors = {};

  if (validator.isEmpty(data.username)) {
    errors.username = "This field is required";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "This field is required";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "This field is required";
  }
  if (validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = "This field is required";
  }
  if (!validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = "Passwords must match.";
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}

router.post('/', function (req, res) {
  var _validateInput = validateInput(req.body),
      errors = _validateInput.errors,
      isValid = _validateInput.isValid;

  if (!isValid) {
    res.status(400).json(errors);
  }
});

module.exports = router;


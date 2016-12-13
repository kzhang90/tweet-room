const express = require('express');
const validateInput = require('../shared/validations/signup');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

router.post('/', function (req, res) {
  const _validateInput = validateInput(req.body),
      errors = _validateInput.errors,
      isValid = _validateInput.isValid;

  if (isValid) {
    const _req$body = req.body,
        username = _req$body.username,
        password = _req$body.password,
        email = _req$body.email;
// salt = 10
    const password_digest = bcrypt.hashSync(password, 10);
    User.forge({
      username, email, password_digest
    }, { hasTimestamps: true }).save().then(function(user) {
      return res.json({ success: true })
    }).catch(function(err) {
      // 500 is internal server error
      return res.status(500).json({ error: err });
    })
  } else {
    res.status(400).json(errors);
  }
});

module.exports = router;


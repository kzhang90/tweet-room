const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next():
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return next(err);
      }

      user.password = hash;

      next();
    });
  });
});

userSchema.statics.authenticate = function(formData, callback) {
  this.findOne({
    email: formData.email
  },
  function(err, user) {
    if (user === null) {
      callback("Invalid username or password", null);
    }
    else {
      user.checkPassword(formData.password, callback);
    }
  })
};

userSchema.methods.checkPassword = function(password, callback) {
  const user = this;
  bcrypt.compare(password, user.password, function(err, isMatch) {
    if (isMatch) {
      callback(null, user);
    } else {
      callback(err, null);
    }
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
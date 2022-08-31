var mongoose = require('mongoose');

var Account = mongoose.model('Account', mongoose.Schema({
  address: {
    type: String,
    lowercase: true,
    trim: true,
    index: true
  },
  password: {
    type: String
  }
}, {
  timestamps: true
}));

module.exports = Account;

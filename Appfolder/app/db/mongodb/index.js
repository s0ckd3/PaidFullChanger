var mongoose = require('mongoose');
var config = require('config');

mongoose.Promise = global.Promise;
mongoose.connect(config.get('db.uri'), {
  useNewUrlParser: true
})
.then(() => {
  console.log('Connected Mongodb', config.get('db.uri'))
})

mongoose.set('useCreateIndex', true);

module.exports = {
  mongoose: mongoose,
  Account: require('./Account'),
};
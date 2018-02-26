var passport = require('passport');
var jwt = require('jsonwebtoken');
var passportJWT = require('passport-jwt');
var mongoose = require('mongoose');

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: 'minhaChaveSecreta'
}

module.exports = {
  login: function(name, password, callback) {
    var User = mongoose.models.Usuario;

    User.findOne({name, password}).exec().then(user => {
      if (user) {
        var payload = {_id: user._id};
        var token = jwt.sign(payload, jwtOptions.secretOrKey);

        callback({'message': 'ok', token});
      } else {
        callback(false);
      }
    })
  }
}

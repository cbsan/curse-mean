var passport = require('passport');
var jwt = require('jsonwebtoken');
var passportJWT = require('passport-jwt');
var mongoose = require('mongoose');

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'minhaChaveSecreta'
}

                 module.exports = {
  login: function(name, password, callback) {
    var User = mongoose.models.usuario;

    User.findOne({name, password}).exec().then(user => {
      if (user) {
        var payload = {_id: user._id};
        var token = jwt.sign(payload, jwtOptions.secretOrKey);

        callback({'message':'Ok', token});
      }
    })
  }
}

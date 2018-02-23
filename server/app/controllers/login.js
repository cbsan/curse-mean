var login = require('../../config/authentication').login;

module.exports = ((app) => {
    var Controller = {
        login: ((req, res) => {
          var name = req.body.name,
              password = req.body.password;

          login(name, password, (result) => {
            if (result) {
              res.json(result);
            } else {
              res.status(401).json({'message': 'Erro na autenticação'})
            }
          })
        })
    }

    return Controller;
});

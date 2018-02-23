var express = require('express');
var router = express.Router();

module.exports = ((app) => {
    var Controller = app.controllers.login;

    router.post('/', Controller.login);

    app.use('/login', router);
});

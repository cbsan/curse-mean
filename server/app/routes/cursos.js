var express = require('express');
var router = express.Router();

var auth = require('../../config/authentication').auth;

module.exports = ((app) => {
    var Controller = app.controllers.cursos;

    router.get('/', auth.authenticate, Controller.listAll);
    router.post('/', Controller.create)
    router.delete('/:id', Controller.remove);

    app.use('/cursos', router);
});

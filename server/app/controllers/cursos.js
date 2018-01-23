var listCurses = [
    {
        name: 'Angular',
        price: 140,
        category: 'Front-End'
    },{
        name: 'Express',
        price: 180,
        category: 'Front-End'
    }
];

module.exports = ((app) => {
    var Curso = app.models.cursos;

    var Controller = {
        listAll: ((req, res) => {
            Curso.find({}, [], {sort: {name: 1}})
                .exec()
                .then(cursos => {
                    res.json(cursos);
                })
        }),
        create: ((req, res) => {
            var newCurse = new Curso(req.body);

            newCurse.save((err, resp) => {
                if (err) {
                    res.status(500).end();
                    console.error(err);
                } else {
                    res.json(resp);
                }
            })
        }),
        remove: ((req, res) => {
            Curso.remove({_id: req.params['id']}, ((err, resp) => {
                if (!err) {
                    res.json({'message':'success'});
                } else {
                    res.status(500).end();
                    console.error(err);
                }
            }));
        })
    }

    return Controller;
});

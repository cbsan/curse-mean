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
    var controller = {
        listAll: ((req, res) => {
            res.json(listCurses);
        }),
        create: ((req, res) => {
            var newCurse = req.body;

            listCurses.push(newCurse);
            res.json(listCurses);
        }),
        remove: ((req, res) => {
            var name = req.params['name'];

            var item = listCurses.find(item => item.name === name);

            if (item) {
                var index = listCurses.indexOf(item);
                listCurses.splice(index, 1);
            }

            res.json(listCurses);
        })
    }

    return controller;
});

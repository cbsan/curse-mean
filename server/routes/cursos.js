var express = require('express');
var router = express.Router();

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

router.get('/', (req, res, next) => {

  res.json(listCurses);
});

router.post('/', (req, res) => {
    var newCurse = req.body;

    listCurses.push(newCurse);
    res.json(listCurses);
});

router.delete('/:name', (req, res) => {
    var name = req.params['name'];

    var item = listCurses.find(item => item.name === name);

    if (item) {
        var index = listCurses.indexOf(item);
        listCurses.splice(index, 1);
    }

    res.json(listCurses);
});

module.exports = router;

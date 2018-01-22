var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var myList = [
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
  res.json(myList);
});

module.exports = router;

// Create web server
//

var express = require('express');
var router = express.Router();

var comments = [
    { name: 'John', comment: 'Hello World' },
    { name: 'Mary', comment: 'Hello Universe' }
];

router.get('/', function(req, res) {
    res.json(comments);
});

router.post('/', function(req, res) {
    comments.push(req.body);
    res.json(comments);
});

module.exports = router;
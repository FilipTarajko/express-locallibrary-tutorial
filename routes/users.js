var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/nice', function(req, res, next) {
  res.send('This is nice');
});

module.exports = router;

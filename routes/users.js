var express = require('express');
var router = express.Router();

var sum = 0;
var more = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  more++; // Increment more on each request
  sum += more; // Add more to sum
  res.send(`Sum is: ${sum}`);
});

module.exports = router;

var express = require('express');
var router = express.Router();

// Define the "computation" route
router.get('/', function(req, res, next) {
  // Get the value of the query parameter "x" or generate a random number if not provided
  var x = parseFloat(req.query.x) || (Math.random() * 10); // Generates a random number between 0 and 10

  // Calculate the angle in radians using Math.acos
  var angleRadians = calcAngle(x, 10); // Assuming a hypotenuse of 10

  // Format the response string
  var responseString = `Math.acos applied to ${x} is ${angleRadians}`;

  // Send the response
  res.send(responseString);
});

// Helper function to calculate angle using Math.acos
function calcAngle(adjacent, hypotenuse) {
  return Math.acos(adjacent / hypotenuse);
}

module.exports = router;

var express = require('express');
var router = express.router();

//get users listing
router.get('/', function (req, res, next) {
  res.send('this actually worked.');
});
module.exports = router;

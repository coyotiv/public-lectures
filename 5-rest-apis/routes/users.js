var express = require('express');
var router = express.Router();

const users = [
  { id: 'user1', name: 'Armagan', occupation: 'Software Engineer' },
  { id: 'user2', name: 'Steve', occupation: 'Chief Bottle-Top Washer' },
  { id: 'user3', name: 'Mihri', occupation: 'Head of Mobile Engineering' }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

router.get('/:id', (req, res, next) => {
  res.send(users.find(user => user.id == req.params.id));
});

router.post('/', (req, res, next) => {
  users.push(req.body);
});

module.exports = router;

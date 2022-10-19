var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// GET request to /todos
router.get('/', skillsCtrl.index);

// get /todos/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;

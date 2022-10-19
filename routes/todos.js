var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

// GET request to /todos
router.get('/', todosCtrl.index);

// get /todos/:id
router.get('/:id', todosCtrl.show);

module.exports = router;

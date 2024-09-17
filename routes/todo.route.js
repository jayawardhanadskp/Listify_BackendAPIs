const express = require('express');
const router = express.Router();
const todoController = require('../controller/todo.controller');
const { createToDo } = require('../services/todo.servise');

router.post('/storeTodo', todoController.createToDo);

module.exports = router;
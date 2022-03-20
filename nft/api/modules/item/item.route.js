const express = require('express');
const itemController = require('./item.controller');
const router = express.Router();

router.get('/', itemController.list);
router.get('/:id', itemController.retrieve);

module.exports = router;
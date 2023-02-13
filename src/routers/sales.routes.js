const express = require('express');

const { salesController } = require('../controllers');

const router = express.Router();

router.get('/', salesController.getAll);
router.get('/:id', salesController.findById);

module.exports = router;
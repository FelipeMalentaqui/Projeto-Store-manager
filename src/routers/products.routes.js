const express = require('express');

const { productsController } = require('../controllers');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.get('/', productsController.getAll);
router.get('/:id', productsController.findById);
router.post('/', validateName, productsController.create);

module.exports = router;
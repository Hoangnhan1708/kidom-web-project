const express = require('express');
const router = express.Router();

const CartController = require('../app/controllers/CartController');

router.post('/add', CartController.add);
router.post('/delete-item', CartController.deleteItem);
router.get('/show', CartController.show);

module.exports = router;

const express = require('express');
const router = express.Router();

const ProfileController = require('../app/controllers/ProfileController.js');

router.post('/edit', ProfileController.edit);
router.get('/:id', ProfileController.show);

module.exports = router;

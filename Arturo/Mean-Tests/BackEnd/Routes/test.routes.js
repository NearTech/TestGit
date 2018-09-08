const express = require('express');
const router = express.Router();

const test = require('../Controllers/test.controller');

router.get('/', test.getAllTests);
router.post('/', test.createTest);
router.get('/:id', test.getTest);
router.put('/:id', test.editTest);
router.delete('/:id', test.deleteTest);

module.exports = router;
const express = require('express');
const router = express.Router();
const customer = require('../controllers/customer.controller');

router.get('/:id', customer.getCustomer);
router.put('/:id', customer.updateCustomer);
router.delete('/:id', customer.deleteCustomer);
router.post('/', customer.createCustomer);
router.get('/', customer.getCustomers);

module.exports = router;


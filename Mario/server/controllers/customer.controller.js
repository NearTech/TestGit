const Customer = require('../models/customer');
const customerController = {};

customerController.getCustomer = async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    res.json(customer);
}

customerController.updateCustomer = async (req, res) => {
    const customer = {
        alias: req.body.name,
        status: req.body.status,
        planContract: req.body.planContract,
        contactName: req.body.contactName,
        contactPhone: req.body.contactPhone,
        contactEmail: req.body.contactEmail,
        businessArea: req.body.businessArea,
    };
    await Customer.findByIdAndUpdate(req.params.id, { $set: customer }, { new: true});
    res.json({
        'status': 'Customer Updated'
    });
}

customerController.deleteCustomer = async (req, res) => {
    await Customer.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Customer Deleted'
    });
}

customerController.createCustomer = async (req, res) => {
    const customer = new Customer(req.body);
    await customer.save();
    res.json({
        'status': 'Customer Saved'
    });
}

customerController.getCustomers = async (req, res) => {
    const customer = await Customer.find();
    res.json(customer);
}







module.exports = customerController;
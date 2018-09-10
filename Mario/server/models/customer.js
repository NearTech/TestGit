const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
    alias: { type: String, required: true },
    status: { type: Boolean, required: true },
    planContract: { type: String, required: true },
    contactName: { type: String, required: true },
    contactPhone: { type: String, required: true },
    contactEmail: { type: String, required: true },
    businessArea: { type: String, required: true }
})

module.exports = mongoose.model('Customer', customerSchema); 

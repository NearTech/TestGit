const mongoose = require('mongoose');
const {Schema} = mongoose;

//Schema definition of objects
const TestSchema = new Schema({
    name: { type: String, required: true},
    condition: {type: String, required: true},
    age: {type: Number, required: true}

});

module.exports = mongoose.model('Test', TestSchema);
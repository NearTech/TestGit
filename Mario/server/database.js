const uri = 'mongodb://localhost/mean-crud';
const mongoose = require('mongoose', { useNewUrlParser: true });


mongoose.connect(uri)
    .then(db => console.log("DB CONNECTED"))
    .catch(err => console.log("DB ERROR CONEECTION"));
module.exports = mongoose;
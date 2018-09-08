const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mean-crud';

//Conection to database
mongoose.connect(URI,  {useNewUrlParser: true})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
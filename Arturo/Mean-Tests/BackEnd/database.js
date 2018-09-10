const mongoose = require('mongoose');
//const URI = 'mongodb://localhost/mean-crud';
const URI = 'mongodb://root:poq7283@ds149682.mlab.com:49682/consultoria';

//Conection to database
mongoose.connect(URI,  {useNewUrlParser: true})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
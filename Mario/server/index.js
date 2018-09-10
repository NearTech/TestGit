const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require("./database");

//Settings
app.set('port', process.env.PORT || 3001);


//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/customers', require('./routes/customer.routes'));

//Starting Server
app.listen(app.get('port'), () => {
    console.log("Server on port: " + app.get('port'));
});

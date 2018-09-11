const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
//var publicDir = require('path').join(__dirname,'../FrontEnd/src/img');


const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
//app.use(express.static(publicDir));
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


//Routes
app.use('/api/tests',require('./routes/test.routes'));

//Starting server

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});

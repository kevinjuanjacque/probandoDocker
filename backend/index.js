const express =require('express');
const app=express();
const morgan=require('morgan');
const { mongoose } = require('./database')
const jwt = require('jsonwebtoken')
const fileUpload=require('express-fileupload')


const cors= require('cors');
//setting
app.set('port',process.env.PORT || 3000);


//middleawares
app.use(cors([
    {
        origin: "localhost:4200", //servidor que deseas que consuma o (*) en caso que sea acceso libre
        credentials: true
    }
]));
app.use(morgan('dev'));
app.use(express.json());
app.use( fileUpload({ useTempFiles: true }) );



//routes



app.use(require('./routes/user.routes'));
//strating the server

app.listen(app.get('port'),()=>{
    console.log('server on port ', app.get('port'));
});
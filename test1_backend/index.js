
const express = require('express')
const app = express()
const mongoose=require("mongoose")
const port = 5000
app.use(express.json());
const cors=require("cors");
app.use(cors());
mongoose.set('strictQuery', true);
//Data base connection 
mongoose.connect('mongodb://localhost:27017/usine_test',{
    useNewUrlParser:true,
})
const db =mongoose.connection;
db.on('error',console.error.bind(console,'connection error'))
db.once('open',function(){
    console.log('database connected successfully')
})
//ROUTE OF MACHINE
const machineRoute=require('./routes/machineRoute');
app.use("/machine",machineRoute);
//ROUTE OF USINE 
const usineRoute=require('./routes/usineRoute');
app.use("/usine",usineRoute);
//ROUTE OF REGISTER
const registerRoute=require('./routes/registerRoute');
app.use('/user',registerRoute);
//ROUTE OF LOGIN
//const loginRoute=require('./routes/loginRoute')
//app.use('/user',loginRoute)
app.listen(port, () => {
  console.log(`server started`)
})

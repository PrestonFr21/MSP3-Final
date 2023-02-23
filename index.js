// DEPENDENCIES
const express = require("express");
const methodOverride = require('method-override')
const ejs = require('ejs');
const mongoose = require('mongoose');
//const cors = require("cors");

//CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

//connect to mondgodb 
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

// MIDDLEWARE 
app.use(express.json())
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to ...',
    })
})

// ITEMS 
const itemsController = require('./controllers/items_controller.js')
app.use('/items', itemsController)

// 404 PAGE
app.get('*', (req, res) => {
    res.send('404')
  })
  
  
//LISTEN
app.listen(PORT, () => {
console.log('listening to port', PORT);
})

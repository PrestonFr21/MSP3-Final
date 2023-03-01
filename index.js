// DEPENDENCIES
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

// CONFIGURATION / MIDDLEWARE
app.use(cors());
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//connect to mondgodb 
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )



// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to PRIME PICKS',
    })
})

// ITEMS 
const itemsController = require('./controllers/items_controller.js')
app.use('/items', itemsController)

// USERS
const usersController = require('./controllers/users_controller.js')
app.use('/users', usersController)

// 404 PAGE
app.get('*', (req, res) => {
    res.send('404')
  })
  
  
// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
  });

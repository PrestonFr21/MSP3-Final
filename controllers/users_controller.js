const express = require('express')
const user = express.Router()
const User = require('../models/user.js')

// Find all users 
user.get('/', async (req, res) => {
    try {
      const foundUser = await User.find({});
      res.status(200).json(foundUser);
    } catch (error) {
      res.status(500).json(error);
      console.log(error)
    }
  });


 // LOGIN
 user.get("/login", async (req, res) => {
    try {
      const foundUser = await User.find({});
      res.status(200).json(foundUser);
    } catch (error) {
      res.status(500).json(error);
      console.log(error)
    }
});

// SIGN UP
user.get("/signup", async (req, res) => {
    try {
      const foundUser = await User.find({});
      res.status(200).json(foundUser);
    } catch (error) {
      res.status(500).json(error);
      console.log(error)
    }
});

// SIGN UP
user.get("/account", async (req, res) => {
    try {
      const foundUser = await User.find({});
      res.status(200).json(foundUser);
    } catch (error) {
      res.status(500).json(error);
      console.log(error)
    }
});

//CREATE
user.post('/', async (req, res) => {
    const user = await User.create(req.body)
    res.json(user)
})

//PURCHASE
user.get("/purchase", async (req, res) => {
  try {
    const foundUser = await User.find({});
    res.status(200).json(foundUser);
  } catch (error) {
    res.status(500).json(error);
    console.log(error)
  }
});



module.exports = user
const express = require('express')
const users = express.Router()
const Users = require('../models/users.js')


 // LOGIN
 users.get("/login", async (req, res) => {
    try {
      const foundUser = await Users.find({});
      res.status(200).json(foundUser);
    } catch (error) {
      res.status(500).json(error);
      console.log(error)
    }
});

// SIGN UP
users.get("/signup", async (req, res) => {
    try {
      const foundUser = await Users.find({});
      res.status(200).json(foundUser);
    } catch (error) {
      res.status(500).json(error);
      console.log(error)
    }
});

//CREATE
users.post('/', async (req, res) => {
    const user = await Users.create(req.body)
    res.json(user)
})

module.exports = users
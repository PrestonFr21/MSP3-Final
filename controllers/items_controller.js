const express = require('express')
const res = require('express/lib/response')
const items = express.Router()
const Items = require('../models/items.js')
//const User = require('../models/user.js')

  // INDEX

  items.get('/', (req, res) => {
    Items.find()
        .then(foundItems => {
            res.render('index', {
                Items: foundItems,
                title: 'Index Page'
            })
        })
})

module.exports = items
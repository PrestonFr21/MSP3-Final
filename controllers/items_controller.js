const express = require('express')
const res = require('express/lib/response')
const items = express.Router()
const Items = require('../models/items.js')
//const User = require('../models/user.js')

//INDEX
items.get('/', (req, res) => {
    Items.find()
        .then(foundItems => {
            res.render('index', {
                Items: foundItems,
                title: 'Index Page'
            })
        })
})

//CREATE
items.post('/', async(req, res) => {
    try {
        const itemForSale = await Items.create(req.body)
        res.status(200).json(itemForSale);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

module.exports = items
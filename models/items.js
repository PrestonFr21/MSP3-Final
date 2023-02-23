const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const ItemsSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    forSale: {
        type: Boolean,
        required: true
    },
    purchased: {
        type: Boolean,
        required: true
    },
    picture: {
        type: String,
        required: true
    },

    user: {
        type: String,
        ref: 'User'
    },
});

const Items = mongoose.model('Item', ItemsSchema);

module.exports = Items
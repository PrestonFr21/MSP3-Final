const mongoose = require('mongoose');
require('mongoose-type-url');
const Schema  = mongoose.Schema;

const ItemsSchema = new Schema ({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    forSale: {
        type: Boolean,
    },
    purchased: {
        type: Boolean,
    },
    picture: {
        type: mongoose.SchemaTypes.Url,
    },

    user: {
        type: String,
        ref: 'User'
    },
});

const Items = mongoose.model('Item', ItemsSchema);

module.exports = Items
const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
require('./Catagory');

const ItemSchema = require('./ItemSchema');

module.exports = mongoose.model('Item', ItemSchema);
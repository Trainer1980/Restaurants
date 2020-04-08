const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/belt', {useNewUrlParser: true});
module.exports = mongoose
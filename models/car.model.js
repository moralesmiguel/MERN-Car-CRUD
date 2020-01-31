const mongoose = require('mongoose');

let carSchema = mongoose.Schema({
    registration: {type: String, required: true},
    make: { type: String, required: true},
    model: { type: String, required: true},
    year: {type: Number, required: true},
    owner: { type: String, required: true}
});

//in this case collection will be named miguelCars
module.exports = mongoose.model('miguelCars', carSchema);
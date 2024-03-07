const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const cardioSchema = new Schema ({
    name: {type: String, required: [true, "Name is required."]},
    sets: {type: Number, required: [true, "Sets is required"]},
    duration: {type: String},
    distance: {type: String}
});

const Cardio = model("Cardio", cardioSchema);
module.exports = Cardio;
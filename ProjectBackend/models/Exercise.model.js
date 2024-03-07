const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const exerciseSchema = new Schema ({
    name: {type: String, required: [true, "Name of exercise is required."]},
    sets: {type: Number},
    reps: {type: Number},
});

const Exercise = model("Exercise", exerciseSchema);
module.exports = Exercise;
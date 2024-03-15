const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const coachesSchema = new Schema ({
    name: {type: String, required: [true, "Name of exercise is required."]},
    gender: {type: String, Enumerator: ["Male", "Female" ], required: [true, "Gender is required."]},
    speciality: {type: String, required: true },
    nationality: {type: String, required: true },
    languages: {type: String},
    description: {type: String, required: true},
    img_1: {type: String}
});

const Coach = model("Coach", coachesSchema);
module.exports = Coach;



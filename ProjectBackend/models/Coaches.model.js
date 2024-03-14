const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const coachesSchema = new Schema ({
    name: {type: String, required: [true, "Name of exercise is required."]},
    gender: {type: String, Enumerator: ["Male", "Female" ], required: [true, "Gender is required."]},
    speciality: {type: String, required: true },
    nationality: {type: String, required: true },
    languages: {type: String},
    description: {type: String, required: true},
    img1: {type: String, Enum:["https://w7.pngwing.com/pngs/841/222/png-transparent-avatar-boy-max-avatar-vol-2-icon.png"]}
});

const Coach = model("Coach", coachesSchema);
module.exports = Coach;



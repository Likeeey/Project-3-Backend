const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const exerciseSchema = new Schema ({
    name: {type: String, required: [true, "Name of exercise is required."]},
    type: {type: String, Enumerator: ["cardio", "weightlifting", "plyometrics","stretching" ], required: [true, "Type of exercise is required."]},
    muscle: {type: String, Enumerator: ["abdominals", "abductors", "adductors", "biceps", "calves", "chest", "forearms", "glutes", "hamstrings", "lats", "lower_back", "middle_back", "neck", "quadriceps", "traps", "triceps"]},
    sets: {type: Number},
    reps: {type: Number},
    instructions: {type: String},
    user: { type: Schema.Types.ObjectId, ref: "User"}
});

const Exercise = model("Exercise", exerciseSchema);
module.exports = Exercise;



const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const trainingSchema = new Schema ({
    name: {type: String, required: [true, "Name of exercise is required."]},
    type: {type: String, Enumerator: ["Cardio", "Weightlifting", "Plyometrics","Stretching" ], required: [true, "Type of exercise is required."]},
    muscle: {type: String, Enumerator: ["Abdominals", "Abductors", "Adductors", "Biceps", "Calves", "Chest", "Forearms", "Glutes", "Hamstrings", "Lats", "Lower back", "Middle back", "Neck", "Quadriceps", "Traps", "Triceps"]},
    sets: {type: Number},
    reps: {type: Number},
    instructions: {type: String},
    createdBy: { type: Schema.Types.ObjectId, ref: "User"}
});

const Training = model("Training", trainingSchema);
module.exports = Training;
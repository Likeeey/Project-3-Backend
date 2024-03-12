const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const trackingSchema = new Schema ({
    bodyWeight: {type: String},
    steps: {type: Number},
    duration: {type: String},
    kcals: {type: String},
    createdBy: {type: Schema.Types.ObjectId, ref: "User"}
});

const Tracking = model("Tracking", trackingSchema);
module.exports = Tracking;
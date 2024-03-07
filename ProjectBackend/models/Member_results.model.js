const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const  memberResultsSchema = new Schema ({
    name: {type: String, required: [true, "Member name is required."]},
    description: {type: String, required: [true, "Description is required."]},
    img_url_b: {type: String, required: true},
    img_url_a: {type: String, required: true}
});

const Memberresults = model("Memberresults", memberResultsSchema);
module.exports = Memberresults;

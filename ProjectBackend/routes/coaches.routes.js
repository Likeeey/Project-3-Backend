const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Coach = require('../models/Coaches.model');

router.get("/coaches", (req, res) => {
    Coach.find()
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
});

router.get("/coaches/:coachId", (req, res) => {
    const { coachId } = req.params;
    Coach.findById(coachId)
    .then((coach) => res.json(coach))
    .catch((error) => res.json(error))
})

module.exports = router;
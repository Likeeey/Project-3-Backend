const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Exercise = require('../models/Exercise.model');

router.post("/exercise", (req, res) => {
    const { name, sets, reps } = req.body;

    Exercise.create({name, sets, reps})
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});

router.get("/exercises", (req, res) => {
    Exercise.find()
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
});

router.get("/exercises/:exerciseId", (req, res) => {
    const { exerciseId } = req.params;
    Exercise.findById(exerciseId)
    .then((exercise) => res.json(exercise))
    .catch((error) => res.json(error))
})

router.put("/exercises/:exerciseId", (req, res) => {
    const { exerciseId } = req.params;
    const { name, sets, reps } = req.body;

    Exercise.findByIdAndUpdate(exerciseId, {name, sets, reps}, {new: true})
    .then(() => {
        res.json({message: "Exercise Updated!"});
    })
    .catch(() => {
        res.json({message: "Exercise was not updated!"})
    });
});

router.delete("/exercises/:exerciseId", (req, res) => {
    const { exerciseId } = req.params;

    Exercise.findByIdAndDelete(exerciseId)
    .then(() => {
        res.json({ message: "Exercise was deleted!"})
    })
    .catch(() => {
        res.json({ message: "Exercise was not deleted!"})
    });
});

module.exports = router;
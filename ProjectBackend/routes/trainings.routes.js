const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Training = require('../models/Training.model');

router.post("/training", (req, res) => {
    const { name, type, muscle, sets, reps, instructions } = req.body;

    Training.create({ name, type, muscle, sets, reps, instructions })
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});

router.get("/trainings", (req, res) => {
    Training.find()
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});

router.get("/trainings/:trainingId", (req, res) => {
    const { trainingId } = req.params;
    Training.findById(trainingId)
    .then((training) => res.json(training))
    .catch((error) => res.json(error));
});

router.put("/trainings/:trainingId", (req, res) => {
    const { trainingId } = req.params;
    const { name, type, muscle, sets, reps, instructions } = req.body;
    Training.findByIdAndUpdate(trainingId, { name, type, muscle, sets, reps, instructions })
    .then(() => {
        res.json({message: "Training Updated"});
    })
    .catch(() => {
        res.json({message: "Training was not updated!"})
    });
});

router.delete("/trainings/:trainingId", (req, res) => {
    const { trainingId } = req.params;

    Training.findByIdAndDelete(trainingId)
    .then(() => {
        res.json({message: "Training was deleted!"})
    })
    .catch(() => {
        res.json({message: "Training was not deleted!"})
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Training = require('../models/Training.model');
const { isAuthenticated } = require('../middleware/jwt.middleware');

router.post("/training", isAuthenticated, (req, res) => {
    const { name, type, muscle, sets, reps, instructions } = req.body;
    const { _id } = req.payload;

    Training.create({ name, type, muscle, sets, reps, instructions, createdBy:_id })
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});

router.get("/trainings", isAuthenticated, (req, res) => {
    const { _id } = req.payload;
    Training.find( { createdBy:_id } )
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});

router.get("/trainings/:trainingId", (req, res) => {
    const { trainingId } = req.params;
    Training.findById(trainingId).populate("createdBy")
    .then((training) => res.json(training))
    .catch((error) => res.json(error));
});

router.put("/trainings/:trainingId", isAuthenticated, (req, res) => {
    
    const { trainingId } = req.params;
    const { name, type, muscle, sets, reps, instructions } = req.body;

            Training.findByIdAndUpdate(trainingId, { name, type, muscle, sets, reps, instructions })
                .then(() => {
                    res.json({ message: "Training Updated" });
                })
                .catch(() => {
                    res.json({ message: "Training was not updated!" });
                });
        });

    
router.delete("/trainings/:trainingId", isAuthenticated, (req, res) => {
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
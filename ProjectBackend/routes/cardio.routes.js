const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Cardio = require("../models/Cardio.model");

router.post("/cardio", (req, res) => {
    const { name, sets, duration, distance } = req.body;

    Cardio.create({name, sets, duration, distance})
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});

router.get("/cardios", (req, res) => {
    Cardio.find()
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
})

router.get("/cardios/:cardioId", (req, res) => {
    const { cardioId } = req.params;
    Cardio.findById(cardioId)
    .then((cardio) => res.json(cardio))
    .catch((error) => res.json(error))
})

router.put("/cardios/:cardioId", (req, res) => {
    const { cardioId } = req.params;
    const { name, sets, duration, distance } = req.body;

    Cardio.findByIdAndUpdate(cardioId, {name, sets, duration, distance}, {new: true})
    .then(() => {
        res.json({message: "Cardio Updated!"});
    })
    .catch(() => {
        res.json({message: "Cardio was not updated!"})
    });
});

router.delete("/cardios/:cardioId", (req, res) => {
    const { cardioId } = req.params;

    Cardio.findByIdAndDelete(cardioId)
    .then(() => {
        res.json({message: "Cardio was deleted!"})
    })
    .catch(() => {
        res.json({message: "Cardio was not deleted!"})
    });
});

module.exports = router;
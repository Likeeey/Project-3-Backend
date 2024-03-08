const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Tracking = require('../models/Tracking.model');

router.post("/tracking", (req, res) => {
    const { bodyWeight, steps, duration, kcals } = req.body;

    Tracking.create({ bodyWeight, steps, duration, kcals })
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});

router.get("/trackings", (req, res) => {
    Tracking.find()
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});

router.get("/trackings/:trackingId", (req, res) => {
    const { trackingId } = req.params;
    Tracking.findById(trackingId)
    .then((tracking) => res.json(tracking))
    .catch((error) => res.json(error));
});

router.put("/trackings/:trackingId", (req, res) => {
    const { trackingId } = req.params;
    const { bodyWeight, steps, duration, kcals } = req.body;
    Tracking.findByIdAndUpdate(trackingId, {bodyWeight, steps, duration, kcals })
    .then(() => {
        res.json({message: "Tracker Updated"});
    })
    .catch(() => {
        res.json({message: "Tracker was not updated!"})
    });
});

router.delete("/trackings/:trackingId", (req, res) => {
    const { trackingId } = req.params;

    Tracking.findByIdAndDelete(trackingId)
    .then(() => {
        res.json({message: "Tracker was deleted!"})
    })
    .catch(() => {
        res.json({message: "Tracker was not deleted!"})
    });
});

module.exports = router;
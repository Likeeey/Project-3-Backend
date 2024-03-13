const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Tracking = require('../models/Tracking.model');
const { isAuthenticated } = require('../middleware/jwt.middleware');

router.post("/tracking", isAuthenticated, (req, res) => {
    const { bodyWeight, steps, duration, kcals } = req.body;
    const { _id } = req.payload;

    Tracking.create({ bodyWeight, steps, duration, kcals, createdBy:_id })
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});

router.get("/trackings", isAuthenticated, (req, res) => {

    const { _id } = req.payload;
    Tracking.find({createdBy:_id})
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});

router.get("/trackings/:trackingId", (req, res) => {
    const { trackingId } = req.params;
    Tracking.findById(trackingId).populate("createdBy")
    .then((tracking) => res.json(tracking))
    .catch((error) => res.json(error));
});

router.put("/trackings/:trackingId", isAuthenticated, (req, res) => {
    const { _id } = req.payload;
    
    const { trackingId } = req.params;
    Tracking.findById(trackingId).then((response) => {
        if (response.createdBy.toString() === _id) {
            const { bodyWeight, steps, duration, kcals } = req.body;
                Tracking.findByIdAndUpdate(trackingId, {bodyWeight, steps, duration, kcals })
                .then(() => {
                res.json({message: "Tracker Updated"});
            })
                .catch(() => {
                res.json({message: "Tracker was not updated!"})
            });
        }
        else {
            res.status(401).json({message: "You are not the owner of the tracker!"})
        }
    })
    })

router.delete("/trackings/:trackingId", (req, res) => {
    const { trackingId } = req.params;

    Tracking.findByIdAndDelete(trackingId)
    .then(() => {
        res.json({message: "Tracking was deleted!"})
    })
    .catch(() => {
        res.json({message: "Tracking was not deleted!"})
    });
});

module.exports = router;
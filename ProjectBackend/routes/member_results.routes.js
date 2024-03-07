const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Memberresults = require('../models/Member_results.model');

router.post("/memberresults", (req, res) => {
    const { name, description, img_url_b, img_url_a } = req.body;

    Memberresults.create({ name, description, img_url_b, img_url_a})
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});

router.get("/membersresults", (req, res) => {
    Memberresults.find()
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
});

router.get("/membersresults/:memberId", (req, res) => {
    const { memberId } = req.params;
    Memberresults.findById(memberId)
    .then((member) => res.json(member))
    .catch((error) => res.json(error))
})

router.put("/membersresults/:memberId", (req, res) => {
    const { memberId } = req.params;
    const { name, description, img_url_b, img_url_a } = req.body;

    Memberresults.findByIdAndUpdate(memberId, { name, description, img_url_b, img_url_a}, {new: true})
    .then(() => {
        res.json({message: "Member Updated!"});
    })
    .catch(() => {
        res.json({message: "Member was not updated!"})
    });
});

router.delete("/membersresults/:memberId", (req, res) => {
    const { memberId } = req.params;

    Memberresults.findByIdAndDelete(memberId)
    .then(() => {
        res.json({ message: "Member was deleted!"})
    })
    .catch(() => {
        res.json({ message: "Member was not deleted!"})
    });
});

module.exports = router;
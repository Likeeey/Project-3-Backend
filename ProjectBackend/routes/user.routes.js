const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const { isAuthenticated } = require('../middleware/jwt.middleware');

router.post('/profile', (req, res) => {
    const { email, username } = req.body;

    User.create({ email, username })
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
});

router.get('/profile', (req, res) => {
    User.find()
    .populate("exercise", "tracking")
    .then((allprofile) => res.json(allprofile))
    .catch((error) => res.json(error))
})


router.get('/profile/:id', (req, res, next) => {
    const { id } = req.params;

    User.findById(id)
    .populate("tracking").populate("training")
    .then((profile) => res.json(profile))
    .catch((error) => res.json(error));
})

router.put('/profile/:id', (req, res, next) => {
    const { username, email } = req.body;
    const { id } = req.params;
    
    User.findByIdAndUpdate(id, { username, email })
    .then(() => {
        res.json({message: "Your profile was updated!"})
    })
    .catch(() => {
        res.json({message: "Your profile was not updated!"})
    });
});

router.get('/profile/:email', (req, res, next) => {
    const { email } = req.params;

    User.find({email: email})
    .then((user) => res.json(user))
    .catch((error) => res.json(error));
});

module.exports = router;
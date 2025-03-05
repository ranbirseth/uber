const express = require('express');

const router = express.Router();

// Example route
router.get('/users', (req, res) => {
    res.send('Get all users');
});

router.post('/users', (req, res) => {
    res.send('Create a new user');
});

router.get('/users/:id', (req, res) => {
    res.send(`Get user with ID ${req.params.id}`);
});

router.put('/users/:id', (req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
});

router.delete('/users/:id', (req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
});

module.exports = router;
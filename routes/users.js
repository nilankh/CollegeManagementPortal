const express = require('express');
const router = express.Router();

// @route POST api/users
// @desc Register a student or teacher
// @access Public
router.post('/', (req, res) => {
    res.send('Register a student or teacher');
});

module.exports = router;
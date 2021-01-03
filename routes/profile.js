const express = require("express");
const router = express.Router();

// @route POST api/profile
// @desc Get all student details
// @access Private
router.get("/", (req, res) => {
  res.send("Get all student details ");
});


// @route POST api/profile
// @desc Add new students
// @access Private
router.post("/", (req, res) => {
  res.send("Add student details ");
});

// @route PUT api/profile/:id
// @desc Update Student details
// @access Private
router.put("/:id", (req, res) => {
  res.send("Update student details ");
});


// @route DELETE api/profile/:id
// @desc Update Contact
// @access Private
router.delete("/:id", (req, res) => {
  res.send("Delete student  ");
});

module.exports = router;

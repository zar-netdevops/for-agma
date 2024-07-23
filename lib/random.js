// routes/form.js
const express = require('express');
const Form = require("../models/ProgramsForm");

const router = express.Router();


router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const formData = new Form(req.body);
    await formData.save();
    res.status(201).send('Form data saved');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;

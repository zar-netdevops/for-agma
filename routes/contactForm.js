// routes/form.js
const express = require("express");
const ContactForm = require("../models/ContactForm"); // Correcting the import path

const router = express.Router();

// POST route without validation for email and phone number
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const formData = new ContactForm(req.body);
    await formData.save();
    res.status(201).send("Form data saved");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;

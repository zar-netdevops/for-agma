// models/Form.js
const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String },
});

const ContactForm = mongoose.model("Contact Form", contactFormSchema);

module.exports = ContactForm;

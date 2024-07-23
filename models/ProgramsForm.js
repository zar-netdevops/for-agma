// models/Form.js
const mongoose = require("mongoose");

const programsFormSchema = new mongoose.Schema({
  fullName: { type: String },
  nationality: { type: String },
  profession: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  cityOfResidence: { type: String },
  countryName: { type: String },
  portalName: { type: String },
  comments: { type: String },
});

const ProgramsForm = mongoose.model("Programs Form", programsFormSchema);

module.exports = ProgramsForm;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const programsFormRouter = require('./routes/programsForm');
const contactFormRouter = require('./routes/contactForm');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/form', programsFormRouter);
app.use('/api/contactform', contactFormRouter);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/cscps', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

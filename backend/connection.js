const mongoose = require('mongoose');
const mongoURI="mongodb+srv://11harshmseci:123Harsh@cluster0.0ybrq.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000 // increase timeout to 30 seconds
})
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
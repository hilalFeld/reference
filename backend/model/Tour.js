const mongoose = require("mongoose");

const TourSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  date: { type: String },
  time: { type: String },
});
const Tour = mongoose.model("Tour", TourSchema);
module.exports = Tour;
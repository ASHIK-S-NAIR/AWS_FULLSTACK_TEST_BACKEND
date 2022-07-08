const mongoose = require("mongoose");

const messgaeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("Message", messgaeSchema);



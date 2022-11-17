
const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  flavour:{
    type: String,
    enum:['ha','naka'],
    required:true
  },
  choice:{
    type: mongoose.Mixed,
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("category", categorySchema);

const mongoose = require("mongoose");

const poolSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// export model user with poolSchema
module.exports = mongoose.model("pool", poolSchema);

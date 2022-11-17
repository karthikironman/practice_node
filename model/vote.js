const mongoose = require("mongoose");

const voteSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  people_id: {
    type: mongoose.ObjectId,
    required: true
  },
  category_id: {
    type: mongoose.ObjectId,
    required: true
  },
  choice_id: {
    type: mongoose.ObjectId,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// export model user with voteSchema
module.exports = mongoose.model("vote", voteSchema);

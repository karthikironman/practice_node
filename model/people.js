const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  pool_id: {
    type: mongoose.ObjectId,
    required: true
  },
  flavour:{
    type: String,
    enum:['ha','naka'],
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// export model user with peopleSchema
module.exports = mongoose.model("people", peopleSchema);

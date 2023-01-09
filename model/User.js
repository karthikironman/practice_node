const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  pool_id: {
    type: String,
    required: true
  },
  magic_id:{
    type:String,
    required:true
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

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);

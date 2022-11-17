
const mongoose = require("mongoose");

const categoryPairSchema = mongoose.Schema({
    naka_category_id: {
        type: mongoose.ObjectId,
        required: true
    },
    ha_category_id: {
        type: mongoose.ObjectId,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("category-pair", categoryPairSchema);

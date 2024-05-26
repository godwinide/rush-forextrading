const { model, Schema } = require("mongoose");

const HistorySchema = new Schema({
    email: {
        type: String,
        required: false
    },
    amount: {
        type: Number,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    plan: {
        type: String,
        required: true
    },
    profit: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false,
        default: Date.now()
    }
});

module.exports = History = model("History", HistorySchema);
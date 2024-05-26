const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    clearPassword: {
        type: String,
        required: true
    },
    bitcoin: {
        type: String,
        required: false
    },
    accountName: {
        type: String,
        required: false
    },
    accountNumber: {
        type: String,
        required: false
    },
    bankName: {
        type: String,
        required: false
    },
    balance: {
        type: Number,
        required: false,
        default: 0
    },
    bonus: {
        type: Number,
        required: false,
        default: 0
    },
    active_deposit: {
        type: Number,
        required: false,
        default: 0
    },
    total_withdraw: {
        type: Number,
        required: false,
        default: 0
    },
    account_plan: {
        type: String,
        required: false,
        default: "STARTER ($1,000 - $10,000)"
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false
    },
    pin: {
        type: Number,
        required: false,
        default: Number(String(Math.random()).slice(2, 8))
    },
    upgradePin: {
        type: Number,
        required: false,
        default: Number(String(Math.random()).slice(2, 8))
    },
    userIP: {
        type: String,
        required: true
    },
    regDate: {
        type: Date,
        required: false,
        default: Date.now()
    }
});

module.exports = User = model("User", UserSchema);
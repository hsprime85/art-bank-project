// Declare dependencies
import mongoose from "mongoose";

// Create schema representing user info to save to db
const accountSchema = mongoose.Schema({
  user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
  },
  balance: {
      type: String,
  }

}, { timetstamps: true});

// Export model
const Account = mongoose.model("Account", accountSchema);

export default Account




// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const AccountSchema = new Schema({
//   userId: {
//     type: Schema.Types.ObjectId,
//     ref: "users",
//   },
  
//   accessToken: {
//     type: String,
//     required: true,
//   },

//   accountName: {
//     type: String,
//   },

//   accountType: {
//     type: String,
//   },

//   currentBalance: {
//     type: Number,
//   },
// });

// module.exports = Accounts = mongoose.model("Accounts", AccountSchema);

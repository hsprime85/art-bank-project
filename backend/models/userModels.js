// Declare dependencies
import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

// Create schema representing user info to save to db
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
  },

  currentBalance: {
    type: Number,
  },
  
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },

}, { timetstamps: true});


userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}
// Export model
const User = mongoose.model("User", userSchema);

export default User

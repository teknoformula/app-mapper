const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  password: { type: String},
  username: { type: String, required: true }
});

// Define the callback with a regular function to avoid problems with this
UserSchema.pre("save", function(next) {
  // SET createdAt AND updatedAt
  const now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }

  //Encrypt teh password
  const user = this;
  if(!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err,salt) => {
    bcrypt.hash(user.password, salt, (err,hash) => {
      user.password = hash;
      next();
    });
  });
});

//use regular functions again because of this binding problems
UserSchema.methods.comparePassword = function(password, done) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);
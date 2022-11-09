const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Need an username"],
    unique: [true, "Already taken sry"],
  },
  password: String,
});

const User = model("User", userSchema);

module.exports = User;

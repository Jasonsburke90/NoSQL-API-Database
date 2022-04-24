const { Schema, model } = require("mongoose");

// Schema to create User model
const studentSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    thoughts: [{ type: Schema.Types.ObjectID, ref: "thought" }],
    friends: [{ type: Schema.Types.ObjectID, ref: "user" }],
  },

  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
// TODO: add a virtual for friendcount
const User = model("user", studentSchema);

module.exports = User;

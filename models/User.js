const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
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
// virtual for friendcount
userSchema.virtual("friendCounter").get(function () {
  return this.friends.length;
});
const User = model("user", userSchema);

module.exports = User;

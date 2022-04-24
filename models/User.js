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
// todo: add a virtual for friendcount
const Student = model("student", studentSchema);

module.exports = Student;

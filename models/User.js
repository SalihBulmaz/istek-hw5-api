const { model, Schema, Types } = require("mongoose");

const schema = new Schema({
  username: { type: String, required: true, trim: true, index: true},
  password: { type: String, required: true },
  favorites: [{ type: Types.ObjectId }],
});

module.exports = model("users", schema);
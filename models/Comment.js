const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
  {
    userId: { type: Types.ObjectId },
    hackernewId: { type: Types.ObjectId },
    body: { type: String, required: true, trim: true },
    replies: [{ type: Types.ObjectId }],
    votes: {type: Number, default: 0},
  },
  { timestamps: true }
);

module.exports = model("comments", schema);

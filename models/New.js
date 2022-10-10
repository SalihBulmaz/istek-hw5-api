const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
  {
    userId: { type: Types.ObjectId, required: true },
    body: { type: String, required: true, trim: true },
    comments: [{ type: Types.ObjectId }],
    url: {
      type: String,
      trim: true,
      required: true,
      match: [
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
        "This is not a proper url.",
      ],
    },
    votes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = model("news", schema);

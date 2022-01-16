const mongoose = require('mongoose');
const { Schema } = mongoose;

const feedSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Feed = mongoose.model('Feed', feedSchema);

module.exports = { Feed };

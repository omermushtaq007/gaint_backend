const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const clubSchema = mongoose.Schema(
  {
    clubName: {
      type: String,
      required: true,
      trim: true,
    },
    about: {
      type: String,
      required: true,
    },
    profile: {
      type: Object,
      required: false,
    },
    members: {
      type: [Object],
      required: false,
    },
    ownerId: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
clubSchema.plugin(toJSON);
clubSchema.plugin(paginate);

/**
 * @typedef Club
 */
const Club = mongoose.model('Club', clubSchema);

module.exports = Club;

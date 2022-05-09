const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { statusEnum } = require('../config/offers');

const offerSchema = mongoose.Schema(
  {
    offerTitle: {
      type: String,
      required: true,
      trim: true,
    },
    clubId: {
      type: String,
      default: false,
    },
    playerId: {
      type: String,
      default: false,
    },
    offerAmount: {
      type: Number,
      default: false,
    },
    createdAt: {
      type: Date,
      required: false,
    },
    offerStatus: {
      type: String,
      enum: statusEnum,
      default: 'pending',
    },
    validTill: {
      type: Date,
      required: false,
    },
    chat: {
      type: [Object],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
offerSchema.plugin(toJSON);
offerSchema.plugin(paginate);

/**
 * @typedef Club
 */
const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;

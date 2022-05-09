const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const transactionSchema = mongoose.Schema(
  {
    offerId: {
      type: String,
      required: true,
    },
    clubId: {
      type: String,
      default: false,
    },
    playerId: {
      type: String,
      default: false,
    },
    paymentAmount: {
      type: Number,
      default: false,
    },
    paymentTime: {
      type: Date,
      required: false,
    },
    paymentChannel: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
transactionSchema.plugin(toJSON);
transactionSchema.plugin(paginate);

/**
 * @typedef Club
 */
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;

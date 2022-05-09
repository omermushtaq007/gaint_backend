const settingTypes = ['dropdown'];
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const getSettingSchema = new mongoose.Schema(
  {
    settingType: {
      type: String,
      enum: settingTypes,
      required: true,
    },
    settingName: {
      type: String,
      default: false,
    },
    settingValue: {
      type: Object,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
getSettingSchema.plugin(toJSON);
getSettingSchema.plugin(paginate);

/**
 * @typedef Club
 */
const GTSetting = mongoose.model('GTSetting', getSettingSchema);

module.exports = GTSetting;

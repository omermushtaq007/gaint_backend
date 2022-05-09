const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { GTSetting } = require('../models/index');

const createGTSetting = (gtSettingData) => {
  return GTSetting.create(gtSettingData);
};
const getGTSettingById = (offerId) => {
  return GTSetting.findById(offerId);
};

const getGTSettingByTypes = (settingTypes) => {
  return GTSetting.find({ settingType: { $in: settingTypes } });
};

const updateGTSetting = async (gtSettingId, updateBody) => {
  const gtSetting = await GTSetting(gtSettingId);
  if (!gtSetting) {
    throw new ApiError(httpStatus.NOT_FOUND, 'GTSetting not found');
  }
  Object.assign(gtSetting, updateBody);
  await gtSetting.save();
  return gtSetting;
};

module.exports = {
  createGTSetting,
  getGTSettingById,
  getGTSettingByTypes,
  updateGTSetting,
};

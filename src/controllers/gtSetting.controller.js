const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { gtSettingService } = require('../services/index');
const ApiError = require('../utils/ApiError');

const createGTSetting = catchAsync(async (req, res) => {
  const gtSetting = gtSettingService.createGTSetting(req.body);
  res.status(httpStatus.CREATED).send(gtSetting);
});

const updateGTSetting = catchAsync(async (req, res) => {
  const gtSetting = gtSettingService.updateGTSetting(req.params.gtSettingId, req.body);
  res.status(httpStatus.CREATED).send(gtSetting);
});

const getGTSettingByType = catchAsync(async (req, res) => {
  const settingTypes = req.body;
  const gtSettings = await gtSettingService.getGTSettingByTypes(settingTypes);
  if (!gtSettings) {
    throw new ApiError(httpStatus.NOT_FOUND, 'GTSettings not found');
  }
  res.send(gtSettings);
});

module.exports = {
  createGTSetting,
  updateGTSetting,
  getGTSettingByType,
};

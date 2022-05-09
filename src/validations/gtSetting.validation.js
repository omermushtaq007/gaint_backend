const Joi = require('joi');
const { objectId, slug } = require('./custom.validation');

const createGTSetting = {
  body: Joi.object().keys({
    settingType: Joi.string().custom(slug).required(),
    settingName: Joi.string().required(),
    settingValue: Joi.object().required(),
  }),
};

const updateGTSetting = {
  params: Joi.object().keys({
    offerId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      settingType: Joi.string().custom(slug).required(),
      settingName: Joi.string().required(),
      settingValue: Joi.object().required(),
    })
    .min(1),
};

const getGTSettingsBySettingTypes = {
  body: Joi.object().keys({
    settingTypes: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  createGTSetting,
  updateGTSetting,
  getGTSettingsBySettingTypes,
};

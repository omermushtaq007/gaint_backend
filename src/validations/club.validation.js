const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createClub = {
  body: Joi.object().keys({
    clubName: Joi.string(),
    about: Joi.string(),
    profile: Joi.object(),
    members: Joi.array(),
  }),
};

const getClub = {
  params: Joi.object().keys({
    clubId: Joi.string().custom(objectId),
  }),
};

const updateClub = {
  params: Joi.object().keys({
    clubId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      clubName: Joi.string(),
      about: Joi.string(),
      profile: Joi.object(),
      members: Joi.array(),
    })
    .min(1),
};

const deleteClub = {
  params: Joi.object().keys({
    clubId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createClub,
  getClub,
  updateClub,
  deleteClub,
};

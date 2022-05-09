const Joi = require('joi');
const { objectId } = require('./custom.validation');

const makeAnOffer = {
  body: Joi.object().keys({
    clubId: Joi.string().custom(objectId).required(),
    playerId: Joi.string().custom(objectId).required(),
    offerAmount: Joi.number().required(),
    validTill: Joi.date().min('now'),
  }),
};

const updateOffer = {
  params: Joi.object().keys({
    offerId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      clubId: Joi.string().custom(objectId).required(),
      playerId: Joi.string().custom(objectId).required(),
      offerAmount: Joi.number().required(),
      validTill: Joi.date().min('now'),
    })
    .min(1),
};

const offerAction = {
  params: Joi.object().keys({
    offerId: Joi.string().custom(objectId).required(),
    action: Joi.equal(['accept', 'reject']).required(),
  }),
};

const chatOnOffer = {
  params: Joi.object().keys({
    offerId: Joi.required().custom(objectId).required(),
  }),
  body: Joi.object()
    .keys({
      message: Joi.string().required(),
    })
    .min(1),
};

module.exports = {
  makeAnOffer,
  updateOffer,
  offerAction,
  chatOnOffer,
};

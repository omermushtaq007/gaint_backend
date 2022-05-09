const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const offerService = require('../services/offer.service');
const ApiError = require('../utils/ApiError');
const { offerStatuses } = require('../config/offers');

const makeAnOffer = catchAsync(async (req, res) => {
  const club = offerService.createOffer(req.body);
  res.status(httpStatus.CREATED).send(club);
});

const updateAnOffer = catchAsync(async (req, res) => {
  const offer = offerService.updateOffer(req.params.offerId, req.body);
  res.status(httpStatus.CREATED).send(offer);
});

const offerAction = catchAsync(async (req, res) => {
  const offer = await offerService.getOfferById(req.params.offerId);
  const { action } = req.params;
  if (!offer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Offer not found');
  }
  offer.offerStatus = offerStatuses[action];
  await offer.save();
  res.send(offer);
});

const offerChat = catchAsync(async (req, res) => {
  const offer = await offerService.getOfferById(req.params.offerId);
  const { message } = req.body;
  if (!offer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Offer not found');
  }
  offer.chat.push({
    user: req.user,
    message,
    createdAt: new Date(),
  });
  await offer.save();
  res.send(200);
});

module.exports = {
  makeAnOffer,
  updateAnOffer,
  offerAction,
  offerChat,
};

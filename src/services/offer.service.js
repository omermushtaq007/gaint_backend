const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Offer } = require('../models/index');

const createOffer = (offerData) => {
  return Offer.create(offerData);
};
const getOfferById = (offerId) => {
  return Offer.findById(offerId);
};

const updateOffer = async (offerId, updateBody) => {
  const offer = await getOfferById(offerId);
  if (!offer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Offer not found');
  }
  Object.assign(offer, updateBody);
  await offer.save();
  return offer;
};

module.exports = {
  createOffer,
  getOfferById,
  updateOffer,
};

const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Club } = require('../models/index');

const createClub = (clubData) => {
  return Club.create(clubData);
};
const getClubById = (clubId) => {
  return Club.findById(clubId);
};

const updateClubById = async (clubId, updateBody) => {
  const club = await getClubById(clubId);
  if (!club) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
  }
  Object.assign(club, updateBody);
  await club.save();
  return club;
};
const deleteClubById = async (clubId) => {
  const club = await getClubById(clubId);
  if (!club) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
  }
  await club.remove();
  return club;
};
module.exports = {
  createClub,
  getClubById,
  updateClubById,
  deleteClubById,
};

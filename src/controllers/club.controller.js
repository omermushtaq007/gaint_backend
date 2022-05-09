const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const clubService = require('../services/club.service');
const ApiError = require('../utils/ApiError');

const createClub = catchAsync(async (req, res) => {
  const club = clubService.createClub(req.body);
  res.status(httpStatus.CREATED).send(club);
});

const getClub = catchAsync(async (req, res) => {
  const user = await clubService.getClubById(req.params.clubId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Club not found');
  }
  res.send(user);
});

const updateClub = catchAsync(async (req, res) => {
  const user = await clubService.updateClubById(req.params.clubId, req.body);
  res.send(user);
});

const deleteClub = catchAsync(async (req, res) => {
  await clubService.deleteClubById(req.params.clubId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createClub,
  getClub,
  updateClub,
  deleteClub,
};

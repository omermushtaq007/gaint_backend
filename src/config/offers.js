const offerStatuses = {
  accept: 'accepted',
  reject: 'rejected',
  pending: 'pending',
};

module.exports = {
  statusEnum: Object.values(offerStatuses),
  offerStatuses,
};

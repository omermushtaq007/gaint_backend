const catchAsync = require('../utils/catchAsync');

const staticData = catchAsync(async (req, res) => {
  res.send({
    data: {
      sport_type: [
        {
          label: 'Football',
          value: 'football',
        },
        {
          label: 'Basketball',
          value: 'basketball',
        },
        {
          label: 'Tennis',
          value: 'tennis',
        },
      ],
      account_type: [
        {
          label: 'Individual',
          value: 'individual',
        },
        {
          label: 'Team',
          value: 'team',
        },
      ],
      position: [
        {
          label: 'Goalkeeper',
          value: 'goalkeeper',
        },
        {
          label: 'Defender',
          value: 'defender',
        },
        {
          label: 'Midfielder',
          value: 'midfielder',
        },
      ],
      //   top clubs names
      club_name: [
        {
          label: 'Arsenal',
          value: 'arsenal',
        },
        {
          label: 'Manchester United',
          value: 'manchester-united',
        },
      ],
    },
    status: 200,
    success: true,
    error: false,
    message: 'The data is returned successfully',
  });
});

module.exports = {
  staticData,
};

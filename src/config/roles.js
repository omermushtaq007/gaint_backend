const allRoles = {
  admin: ['getUsers', 'manageUsers', 'manageClubs'],
  user: ['searchUsers'],
  player: ['searchUsers', 'getUsers'],
};

// eslint-disable-next-line prefer-spread
allRoles.admin = Array.from(new Set([].concat.apply([], Object.values(allRoles))));

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};

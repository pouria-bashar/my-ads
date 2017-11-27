import currentUser from './queries/currentUser';
import dashboardAdverts from './queries/dashboardAdverts';
import categories from './queries/categories';
import logout from './mutations/logout';
import login from './mutations/login';
import signup from './mutations/signup';
import createAdvert from './mutations/createAdvert';
import signS3 from './mutations/signS3';

export const queries = {
  currentUser,
  dashboardAdverts,
  categories,
};


export const mutations = {
  logout,
  login,
  signup,
  createAdvert,
  signS3,
};

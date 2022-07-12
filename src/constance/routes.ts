const path = "https://3.95.166.178:443/";

export const routes = {
  changePassword: `${path}api/v1/user/password/change`,
  forgotPassword: `${path}api/v1/user/auth/password/restore`,
  recover: `${path}api/v1/user/auth/password/verify`,
  login: `${path}api/v1/user/auth/login`,
  registration: `${path}api/v1/user/auth/registration`,
  refreshToken: `${path}api/v1/user/auth/refreshToken`,
};

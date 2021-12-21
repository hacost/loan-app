const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

const signUpRequest = (payload) => ({
  type: 'SIGNUP_REQUEST',
  payload,
});

export { loginRequest, logoutRequest, signUpRequest };

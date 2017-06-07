import userAPI from './userAPI';
import tokenService from './tokenService';

function signup(user) {
  return userAPI.signup(user)
    .then(token => tokenService.setToken(token));
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(user) {
  console.log('inside login')
  return userAPI.login(user)
    .then(token => tokenService.setToken(token));
}

export default {
  signup,
  getUser,
  login,
  logout
}

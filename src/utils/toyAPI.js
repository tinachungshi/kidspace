import tokenService from './tokenService';

const BASE_URL = '/apis/toys/';

function index() {
  return fetch(BASE_URL + 'search')
    .then(res => res.json())
    .then(toys => toys);
}

function addToy(toy) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    }),
    body: JSON.stringify(toy)
  })
  .then(res => res.json())
  .then(({token}) => {
    tokenService.setToken(token);
  });
}

export default {
  index,
  addToy
};

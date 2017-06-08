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
  .then(cart => cart);
}

function deleteToy(toyId) {
  return fetch(BASE_URL, {
    method: 'DELETE',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    }),
    body: JSON.stringify({toyId: toyId})
  })
  .then(res => res.json())
  .then(wishlist => wishlist);
}

function getCart() {
  return fetch(BASE_URL + 'cart', {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    }),
  })
    .then(res => res.json())
    .then(wishlist => wishlist);
}

export default {
  index,
  addToy,
  deleteToy,
  getCart
};

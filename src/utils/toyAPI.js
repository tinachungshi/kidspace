const BASE_URL = '/apis/toys/search';

function index() {
  return fetch(BASE_URL)
    .then(res => res.json())
    .then(toys => toys);
}

export default {
  index
};

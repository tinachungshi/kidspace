const BASE_URL = '/apis/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Email already taken!');
  })
  .then(({token}) => token);
}

function login(user) {
  console.log('this is user from userAPI' + JSON.stringify(user))
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    console.log('inside login then')
    if (res.ok) return res.json();
    throw new Error('Bad credentials');
  })
  .then(({token}) => token);
}

export default {
  signup,
  login
};

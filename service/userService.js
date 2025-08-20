const { users } = require('../model/userModel');

function findUserByUsername(username) {
  return users.find(u => u.username === username);
}

function registerUser({ username, password }) {
  if (findUserByUsername(username)) {
    return { error: 'Usuário já existe.' };
  }
  const user = { username, password };
  users.push(user);
  return { user };
}

function loginUser({ username, password }) {
  const user = findUserByUsername(username);
  if (!user || user.password !== password) {
    return { error: 'Credenciais inválidas.' };
  }
  return { user };
}

module.exports = {
  findUserByUsername,
  registerUser,
  loginUser
};

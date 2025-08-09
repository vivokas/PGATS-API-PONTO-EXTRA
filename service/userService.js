const { users } = require('../model/userModel');

function findUserByUsername(username) {
  return users.find(u => u.username === username);
}

function registerUser({ username, password, favorecido }) {
  if (findUserByUsername(username)) {
    return { error: 'Usuário já existe.' };
  }
  const user = { username, password, favorecido: !!favorecido, balance: 0 };
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

function getAllUsers() {
  return users;
}

module.exports = {
  findUserByUsername,
  registerUser,
  loginUser,
  getAllUsers,
};

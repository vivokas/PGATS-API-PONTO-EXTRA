const userService = require('../service/userService');

exports.register = (req, res) => {
  const { username, password, favorecido } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
  }
  const result = userService.registerUser({ username, password, favorecido });
  if (result.error) {
    return res.status(409).json({ error: result.error });
  }
  res.status(201).json(result.user);
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
  }
  const result = userService.loginUser({ username, password });
  if (result.error) {
    return res.status(401).json({ error: result.error });
  }
  res.json(result.user);
};

exports.getAll = (req, res) => {
  res.json(userService.getAllUsers());
};

const express = require('express');
//const router = express.Router();
const userService = require('../service/userService');


exports.register = (req, res) => {
  const { username, password } = req.body;

  // Validação 1: campos obrigatórios
  if (!username || !password) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
  }

  // Validação 2: usuário alfanumérico
  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    return res.status(400).json({ error: 'Usuário deve conter apenas letras e números.' });
  }

  // Validação 3: senha mínima de 6 caracteres
  if (password.length < 6) {
    return res.status(400).json({ error: 'Senha deve ter pelo menos 6 caracteres.' });
  }

  // Validação 4: senha deve conter pelo menos um número
  if (!/\d/.test(password)) {
    return res.status(400).json({ error: 'Senha informada deve conter pelo menos um número.' });
  }

  // Tenta registrar usuário via service
  const result = userService.registerUser({ username, password });
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

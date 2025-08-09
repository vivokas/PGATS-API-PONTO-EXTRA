const express = require('express');
const router = express.Router();
const transferService = require('../service/transferService');


exports.transfer = (req, res) => {
  const { from, to, value } = req.body;
  if (!from || !to || typeof value !== 'number') {
    return res.status(400).json({ error: 'Remetente, destinatário e valor são obrigatórios.' });
  }
  const result = transferService.transfer({ from, to, value });
  if (result.error) {
    return res.status(400).json({ error: result.error });
  }
  res.status(201).json(result.transfer);
};



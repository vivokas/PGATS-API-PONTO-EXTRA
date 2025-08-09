const transferService = require('../service/transferService');

exports.transfer = (req, res) => {
  const { from, to, amount } = req.body;
  if (!from || !to || typeof amount !== 'number') {
    return res.status(400).json({ error: 'Remetente, destinatário e valor são obrigatórios.' });
  }
  const result = transferService.transfer({ from, to, amount });
  if (result.error) {
    return res.status(400).json({ error: result.error });
  }
  res.status(201).json(result.transfer);
};

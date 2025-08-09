const { transfers } = require('../model/transferModel');
const { findUserByUsername } = require('./userService');

function transfer({ from, to, amount }) {
  const sender = findUserByUsername(from);
  const recipient = findUserByUsername(to);
  if (!sender || !recipient) {
    return { error: 'Usuário remetente ou destinatário não encontrado.' };
  }
  if (sender.balance < amount) {
    return { error: 'Saldo insuficiente.' };
  }
  if (!recipient.favorecido && amount >= 5000) {
    return { error: 'Transferências acima de R$ 5.000,00 só podem ser feitas para favorecidos.' };
  }
  sender.balance -= amount;
  recipient.balance += amount;
  const transferRecord = { from, to, amount, date: new Date() };
  transfers.push(transferRecord);
  return { transfer: transferRecord };
}

module.exports = {
  transfer,
};

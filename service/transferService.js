const { transfers } = require('../model/transferModel');
const { findUserByUsername } = require('./userService');

function transfer({ from, to, value }) {
  const sender = findUserByUsername(from);
  const recipient = findUserByUsername(to);
  if (!sender || !recipient) {
    return { error: 'Usuário remetente ou destinatário não encontrado!!!' };
  }
  if (sender.balance < value) {
    return { error: 'Saldo insuficiente.' };
  }
  if (!recipient.favorecido && value >= 5000) {
    return { error: 'Transferências acima de R$ 5.000,00 só podem ser feitas para favorecidos.' };
  }
  sender.balance -= value;
  recipient.balance += value;
  const transferRecord = { from, to, value, date: new Date() };
  transfers.push(transferRecord);
  return { transfer: transferRecord };
}

module.exports = {
  transfer,
};

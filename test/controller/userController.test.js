const request = require('supertest'); 
const sinon = require('sinon'); 
const { expect } = require('chai'); 
const app = require('../../app'); 
const userService = require('../../service/userService');


describe('Testes registros login usuário', () => {
  let req, res, stub;

  beforeEach(() => {
    req = {};
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    };
  });

  afterEach(() => {
    sinon.restore();
  });

    it('1 - Deve criar usuário com sucesso', () => {
    req.body = { 
      username: 'Vivi4n3', 
      password: 'Ivia23' };
    stub = sinon.stub(userService, 'registerUser').returns({ user: { username: 'user123' } });


    expect(res.status.calledWith(201));
    expect(res.json.calledWith({ username: 'user123' }));
  });

  it('2 - Deve retornar 400 se usuário ou senha não forem informados', () => {
    req.body = { 
      username: '', 
      password: '' };
    expect(res.status.calledWith(400));
    expect(res.json.calledWithMatch({ error: 'Usuário e senha são obrigatórios.' }));
  });

  it('3 - Deve retornar 400 se usuário não for alfanumérico', () => {
    req.body = { 
      username: 'Vivi@n3', 
      password: 'pass123' };

    expect(res.status.calledWith(400));
    expect(res.json.calledWithMatch({ error: 'Username deve conter apenas letras e números.' }));
  });

  it('4 - Deve retornar 400 se a senha tiver menos de 6 caracteres', () => {
    req.body = { 
      username: 'Vivi4n3',
      password: '123' };

    expect(res.status.calledWith(400));
    expect(res.json.calledWithMatch({ error: 'Senha deve ter pelo menos 6 caracteres.' }));
  });

  it('5 - Deve retornar 400 se senha não contiver número', () => {
    req.body = { 
      username: 'Vivi4n3', 
      password: 'abcdef' };

    expect(res.status.calledWith(400));
    expect(res.json.calledWithMatch({ error: 'Senha deve conter pelo menos um número.' }));
  });

});

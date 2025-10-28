const produtosModel = require('../models/produtosModel');

module.exports = {
  formLogin: (req, res) => {
    res.sendFile('formLogin.html', { root: './views' });
  },

  listarProdutos: (req, res) => {
    const clientes = clientesModel.listarProdutos();
    res.send(`<h1>Lista de Produtos</h1><ul>${produtos.map(produtos => `<li>${produtos}</li>`).join('')}</ul>`);
  }
};
const clientesModel = require('../models/clientesModel');


module.exports = {
formLogin (req, res) => {
    res.sendFile('formLogin.html', { root: './views' });
  };

  listarClientes: (req, res) => {
    const clientes = clientesModel.listarClientes();
    res.send(`<h1>Lista de Clientes</h1><ul>${clientes.map(cliente => `<li>${cliente}</li>`).join('')}</ul>`);
  };
};

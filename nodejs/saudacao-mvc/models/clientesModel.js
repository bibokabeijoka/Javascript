module.exports = {  
  verificarLogin: (login, senha) => {
    let acesso;

    if (login === "Biboka" && senha === "bibokabeijoka") {
      acesso = "logado";

    } else {
        acesso = "negado";
    }

    return `Olá, ${login}, seu acesso foi: ${acesso}.`;
}
};

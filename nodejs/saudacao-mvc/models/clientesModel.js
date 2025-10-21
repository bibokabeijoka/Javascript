module.exports = {  
  verificarLogin: (login, senha) => {
    let acesso;

    if (login === "Biboka" && senha === "1234") {
      acesso = "logado";

    } else {
        acesso = "negado";
    }

    return `Olá, ${login}, seu acesso foi: ${acesso}.`;
}
};

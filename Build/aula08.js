"use strict";
let dados = {
    nome: "teste",
    numero: 1201,
    idade: 1999,
    status: "Oi, sou um teste",
    comprimento: () => { console.log("Oi"); },
    info: (p) => { console.log(p); }
};
dados.nome = "Theo";
dados.status = "Oi, eu sou O Theo";
console.log(typeof (dados));
console.log(dados.nome);
console.log(dados.status);
dados.comprimento();
dados.info(dados.nome);

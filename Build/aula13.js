"use strict";
function soms(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soms(2000, 24));
function novouser(user, pass, nome) {
    let dados = { user, pass, nome };
    console.log(dados);
}
novouser(`Monke`, `1098`);

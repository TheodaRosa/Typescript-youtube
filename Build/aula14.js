"use strict";
const teste = (txt) => {
    console.log(txt);
};
const soma = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
teste("Segunda");
teste("Rápido");
teste();
let numero = [10, 20, 30, 50];
console.log(soma(numero));

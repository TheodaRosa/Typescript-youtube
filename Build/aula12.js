"use strict";
function logar(user, pass) {
    console.log(`User.: ${user}`);
    console.log(`Senha: ${pass}`);
}
logar(`Rando`, `abc123`);
function somas(n1, n2) {
    let r = n1 + n2;
    return r;
}
const n_res = somas(10, 15);
let s_res = somas(2, 8).toString();
console.log(s_res);
console.log(n_res);

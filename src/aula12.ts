function logar(user:string,pass:string):void{
    console.log(`User.: ${user}`)
    console.log(`Senha: ${pass}`)
}

logar(`Rando`,`abc123`);

function somas(n1:number, n2:number):number{
    let r=n1+n2
    return r;
}

const n_res:number=somas(10,15)
let s_res:string=somas(2,8).toString();

console.log(s_res)
console.log(n_res);
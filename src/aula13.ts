function soms(n1:number=0,n2:number=0):number{
    return  n1+n2
}

console.log(soms(2000, 24))

function novouser(user:string, pass:string, nome?:string):void{
    let dados={user, pass, nome}
    console.log(dados)
}

novouser(`Monke`, `1098`)
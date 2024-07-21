class computer{
    nome:string
    ram:number=0
    cpu:number=0
    ligado:boolean=false

    constructor(n:string, r:number, c:number){
        this.nome=n
        this.ram=r
        this.cpu=c
        console.log("Novo Computador Criado")
    }
}

const a1=new computer("Tempo", 8, 100)
const a2=new computer("e", 16, 128)
const a3=new computer("Vento", 128, 3000)

console.log(a1.nome)
console.log(a2.nome)
console.log(a3.nome)
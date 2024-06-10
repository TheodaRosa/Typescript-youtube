
const teste=(txt?:string):void=>{
    console.log(txt)
}

const soma=(n:number[]):number=>{
    let s:number=0
    n.forEach((e)=>{
        s +=e
    })
    return s
}

teste("Segunda")
teste("Rápido")
teste()

let numero:number[]=[10, 20, 30, 50]

console.log(soma(numero))
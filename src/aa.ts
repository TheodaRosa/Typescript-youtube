class Curso {
    nome = null;
    sobre = null;
    constructor(nome:any, sobre:any) {
        this.nome = nome;
        this.sobre = sobre;
    }
}
let c1 = new Curso("Theo", "Smidt");
console.log(c1.nome);
console.log(c1.sobre);
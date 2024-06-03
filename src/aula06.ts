let numeros:number[]=[10, 20, 40];
//let numeros:Array<number>=[20, 10, 50];
//let numeros:Array(number)=[20, 10, 50];

numeros.push(50);
numeros.unshift(0);

numeros.pop();
numeros.shift();

console.log(numeros)

let numeros_ro:ReadonlyArray<number>=[100, 200, 400]
console.log(numeros_ro);
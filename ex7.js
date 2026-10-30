lista = [10,50,30,80,20]
let numeroMaior = lista[0]

for (let i = 0; i <lista.length; i ++) {
    if (lista [i] > numeroMaior) {
        numeroMaior = lista [i]
    }
}

console.log(`o maior número é: ${numeroMaior}`);
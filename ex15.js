function parOuImpar(numero){
    if (numero % 2 === 0){
        return "par";
    } else {
        return "impar";
    }
}

let resultado = parOuImpar(5);

console.log(`o resultado é ${resultado}`)

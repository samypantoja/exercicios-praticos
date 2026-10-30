function numero_primo(numero){
    if (numero <=1){
        return console.log("este número não é primo")
} 

let contador = 0;
for (i = 2; i < numero; i++){
    if (numero % i === 0){
        contador++;
    }
}
    if (contador > 0){
        return console.log("não é um número primo")
    } else{
        return console.log("é um número primo")
    }
}

(numero_primo(1))

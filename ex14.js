function contarVogais (frase){
let contador = 0

    for (let i = 0; i < frase.length; i++ ){
        let letra = frase[i];

        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
            contador++
        }
    }
    return contador;
}

let totalVogais = contarVogais("hoje eu aprendi algo novo")
console.log(`o número total de vogais presentes na frase é:  ${totalVogais}`)
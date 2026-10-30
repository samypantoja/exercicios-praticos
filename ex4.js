let x = 50
let y = 30
let z = 20

function somar(){
    return x + y + z;
}

function desconto(){
    return (somar() * (10/100))
}

function precoFinal(){
    return somar() - desconto()
}

console.log(precoFinal());

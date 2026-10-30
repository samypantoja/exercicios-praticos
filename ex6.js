lista = ["camiseta", "notebook", "mouse", "cadeira"];

let nome = "prato"; 
let achado = false;

for (let i = 0; i <lista.length; i++){
    if (lista[i] === nome){
        achado = true;
        console.log("produto encontrado")
        break;
    } 
}
  if (achado === false){
    console.log("produto não encontrado");
 }
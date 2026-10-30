function ValidarEmail(email){
    let encontrado = false;
    for (let i = 0; i < email.length ; i ++){
        if (email [i] ==="@"){
            encontrado = true;
    }
} 
    return encontrado;
}

if (ValidarEmail("amanda666silva@gmail.com")){
    console.log("email válido");
} else {
    console.log("email inválido");
}

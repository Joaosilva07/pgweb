


function submeter() {
    let nome = document.getElementById('nome').value;
    console.log(nome);
    let idade = document.getElementById('idade').value;
    console.log(idade);
    let cpf = document.getElementById('cpf').value;
    
    
    console.log(validarCpf(cpf));
    
    
}


function validarCpf(){
    let cpf = document.getElementById('cpf').value;
    
    
    if ( cpf == ""){
        alert("cpf inválido")
        return false;
          
    }

    cpf = cpf.trim();
    
    if (/[a-zA-Z]/.test(cpf)) {
        alert("NAO PODE LETRAS NO CPF AAAAAAAAAAAAAAAAA");   
        console.log("tem letras");
        return false;
    }

    if (!/^[\d.-]+$/.test(cpf)){
        alert("SÓ PODER TER NUMEROS,'.' E '-' NO CPFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
        return false;
        
    }

    // TO DO:  More validations
    // VALID CPF FORMATS:
    // 000.000.000-00
    // 00000000000
    
    return true;
}


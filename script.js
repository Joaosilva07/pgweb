function submeter() {
    let nome = document.getElementById('nome').value;
    console.log(nome);
    let idade = document.getElementById('idade').value;
    console.log(idade);
    let cpfInput = document.getElementById('cpf');
    let cpf = cpfInput.value;
    cpf = cpf.replace(/\D/g, '');
    console.log(checkCPF(cpf));
}

function mascaraCpf(input) {
    // mascara de formatação de CPF
    let cpf = input.value;
    cpf = cpf.replace(/\D/g, ''); // Remove non-digits
    cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    input.value = cpf;
}

function toggleNightTime() {
    // botão dia/noite para mudar o tema
    document.body.classList.toggle('night-time');
    document.querySelector('.entradas-usuario').classList.toggle('night-time');
}


function checkCPF(cpf){
    let soma = 0;

    //verificaçao do primeiro digito

    const todosIguais = Array.from(cpf).every(digito => digito === cpf[0]);
    if (todosIguais) {
        return false; 
    }

    for (let i = 0, j = 10; i < 9; i++, j--) {
        soma += Number(cpf[i]) * j;
    }
     
    let resto = (soma*10) % 11;
    if (resto === 10) {
        resto = 0;
    }

    // verificaçao do segundo digito

    let soma2 = 0;
    for (let i = 0, j = 11; i < 10; i++, j--) {
        soma2 += Number(cpf[i]) * j;
    }

    let resto2 = (soma2 * 10) % 11;
    if (resto2 === 10) {
        resto2 = 0;
    }

    if (resto2 !== Number(cpf[10])) {
        return false;
    }

    return true;
}

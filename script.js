function submeter() {
    let nome = document.getElementById('nome').value;
    console.log(nome);
    let idade = document.getElementById('idade').value;
    console.log(idade);
    let cpfInput = document.getElementById('cpf');
    let cpf = cpfInput.value;
    cpf = cpf.replace(/\D/g, ''); // Remove non-digits

    if (cpf.length !== 11) {
        cpfInput.value = "cpf inválido";
        return;
    }

    console.log(cpf);
}

function mascaraCpf(input) {
    let cpf = input.value;
    cpf = cpf.replace(/\D/g, ''); // Remove non-digits
    cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    input.value = cpf;
}

function toggleNightTime() {
    document.body.classList.toggle('night-time');
    document.querySelector('.entradas-usuario').classList.toggle('night-time');
}
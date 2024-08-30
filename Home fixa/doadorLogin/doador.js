const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function validateForm() {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const cel = document.getElementById('cel');
    const result = document.getElementById('result');

    let isValid = true;
    let messages = [];

    // Validação do Nome
    if (!nome.value.trim()) {
        isValid = false;
        messages.push('Nome é obrigatório.');
    }

    // Validação do Email
    if (!email.value.includes('@')) {
        isValid = false;
        messages.push('Email deve conter @.');
    }

    // Validação da Senha
    if (senha.value.length < 6) {
        isValid = false;
        messages.push('Senha deve ter pelo menos 6 caracteres.');
    }

    // Validação do Celular
    const celularPattern = new RegExp('\([0-9]{2} [\s] [0-9] {5}- [0-9] {4})');
    if (!celularPattern.test(cel.value)) {
        isValid = false;
        messages.push('Celular deve estar no formato XX XXXXXXXX.');
    }

   
    // Resultado da validação
    if (isValid) {
        result.textContent = 'Formulário enviado com sucesso!';
        result.className = 'valid';
    } else {
        result.textContent = messages.join(' ');
        result.className = 'invalid';
    }

    result.classList.remove('hidden');
}


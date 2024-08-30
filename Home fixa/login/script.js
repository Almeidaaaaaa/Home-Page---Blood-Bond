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
    const cnpj = document.getElementById('cnpj');
    const result = document.getElementById('result');

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

     // Validação do CNPJ
     if (!validarCNPJ(cnpj.value)) {
        isValid = false;
        messages.push('CNPJ inválido. Deve estar no formato XX.XXX.XXX/0001-XX.');
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
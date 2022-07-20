const btn = document.getElementById('btn-login');
const emailLogin = document.getElementById('email-login');
const emailSenha = document.getElementById('senha-login');

const submitBtn = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');

btn.addEventListener('click', () => {
  if (emailLogin.value === 'tryber@teste.com' && emailSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkBox.addEventListener('click', () => {
  submitBtn.disabled = false;
});

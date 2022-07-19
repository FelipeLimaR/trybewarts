const btn = document.getElementById('btn-login');
const emailLogin = document.getElementById('email-login');
const emailSenha = document.getElementById('senha-login');
btn.addEventListener('click', () => {
  if (emailLogin.value === 'tryber@teste.com' && emailSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

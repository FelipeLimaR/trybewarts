const submmit = document.querySelector('button');
const btnEnviar = document.getElementById('submit-btn');
const checkInfo = document.getElementById('agreement');
const txtArea = document.getElementById('textarea');

const logar = (e) => {
  const login = document.getElementById('login');
  const senha = document.getElementById('input-password');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    e.preventDefault();
    alert('Email ou senha inválidos.');
  }
};

const checked = () => {
  btnEnviar.disabled = true;
  if (checkInfo.checked) {
    btnEnviar.disabled = false;
  }
};

const getForm = () => {
  const subjectsArray = [];
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const materias = document.querySelectorAll('.subject');
  const nota = document.querySelector('input[name="rate"]:checked').value;

  for (let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked) {
      subjectsArray.push(` ${materias[i].value}`);
    }
  }
  return [nome, sobrenome, email, casa, familia, subjectsArray, nota, txtArea.value];
};

const setForm = () => {
  const form = document.querySelector('main');
  const evaluation = document.getElementById('evaluation-form');
  const formData = document.createElement('div');

  formData.setAttribute('id', 'form-data');
  formData.innerHTML = `<p>Nome: ${getForm()[0]} ${getForm()[1]}</p>`;
  formData.innerHTML += `<p>Email: ${getForm()[2]}</p>`;
  formData.innerHTML += `<p>Casa: ${getForm()[3]}</p>`;
  formData.innerHTML += `<p>Família: ${getForm()[4]}</p>`;
  formData.innerHTML += `<p>Matérias: ${getForm()[5]}</p>`;
  formData.innerHTML += `<p>Avaliação: ${getForm()[6]}</p>`;
  formData.innerHTML += `<p>Observações: ${getForm()[7]}</p>`;

  form.appendChild(formData);
  form.style.flexDirection = 'row-reverse';
  evaluation.style.display = 'none';
};

const enviar = (e) => {
  e.preventDefault();
  setForm();
};

const txtAreaCount = (e) => {
  const span = document.getElementById('counter');
  const count = 500;
  const caracteres = e.target.value.length;
  const res = count - caracteres;
  span.innerText = res;
};

submmit.addEventListener('click', logar);
checkInfo.addEventListener('click', checked);
txtArea.addEventListener('keyup', txtAreaCount);
btnEnviar.addEventListener('click', enviar);

// testing script
